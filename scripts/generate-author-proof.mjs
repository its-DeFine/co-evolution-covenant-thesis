import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import process from "node:process";

import { Wallet, verifyMessage } from "ethers";

function parseArgs(argv) {
  const args = {
    keyFile: null,
    privateKey: null,
    proofPath: "proofs/author-proof.ethereum.json",
    gitRef: "HEAD",
    artifacts: ["WHITEPAPER.md", "REFERENCES.md"],
    repo: "https://github.com/its-DeFine/co-evolution-covenant-thesis",
    authorAlias: "DeFine",
    github: "its-DeFine",
  };

  for (let i = 2; i < argv.length; i++) {
    const token = argv[i];
    if (token === "--key-file" && argv[i + 1]) {
      args.keyFile = argv[++i];
      continue;
    }
    if (token === "--private-key" && argv[i + 1]) {
      args.privateKey = argv[++i];
      continue;
    }
    if (token === "--proof" && argv[i + 1]) {
      args.proofPath = argv[++i];
      continue;
    }
    if ((token === "--git-ref" || token === "--ref") && argv[i + 1]) {
      args.gitRef = argv[++i];
      continue;
    }
    if (token === "--artifact" && argv[i + 1]) {
      args.artifacts.push(argv[++i]);
      continue;
    }
    if (token === "--repo" && argv[i + 1]) {
      args.repo = argv[++i];
      continue;
    }
    if (token === "--author" && argv[i + 1]) {
      args.authorAlias = argv[++i];
      continue;
    }
    if (token === "--github" && argv[i + 1]) {
      args.github = argv[++i];
      continue;
    }
    if (token === "--help" || token === "-h") {
      console.log(
        [
          "Usage: node scripts/generate-author-proof.mjs [options]",
          "",
          "Options:",
          "  --key-file <path>     JSON file containing `private_key` (recommended via secure storage)",
          "  --private-key <hex>   Raw private key hex (avoid; leaks in shell history)",
          "  --proof <path>        Output proof JSON (default: proofs/author-proof.ethereum.json)",
          "  --git-ref <ref>       Hash artifacts from a git ref/commit (default: HEAD)",
          "  --artifact <path>     Add an artifact path (repeatable)",
          "  --repo <url>          Repo URL to embed in the signed message",
          "  --author <alias>      Author alias",
          "  --github <handle>     GitHub handle",
        ].join("\n"),
      );
      process.exit(0);
    }
    throw new Error(`Unknown arg: ${token}`);
  }

  return args;
}

function sha256Hex(bytes) {
  return crypto.createHash("sha256").update(bytes).digest("hex");
}

function readArtifactBytesFromGit(ref, artifactPath) {
  const normalizedPath = artifactPath.replaceAll("\\", "/");
  return execFileSync("git", ["show", `${ref}:${normalizedPath}`], {
    encoding: null,
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function loadWallet({ keyFile, privateKey }) {
  if (privateKey) return new Wallet(privateKey);

  const home = os.homedir();
  const defaultKeyFile = path.join(home, ".config", "definelabs", "author-keys", "eth-author.json");
  const resolvedKeyFile = keyFile ? path.resolve(keyFile) : defaultKeyFile;

  if (!fs.existsSync(resolvedKeyFile)) {
    throw new Error(
      `No key available. Provide --key-file or --private-key. Tried default: ${resolvedKeyFile}`,
    );
  }

  const payload = JSON.parse(fs.readFileSync(resolvedKeyFile, "utf8"));
  if (!payload?.private_key) throw new Error("Key file missing `private_key`.");
  return new Wallet(payload.private_key);
}

async function main() {
  const args = parseArgs(process.argv);
  const wallet = loadWallet(args);

  const artifacts = {};
  const sortedArtifacts = [...new Set(args.artifacts)].sort();
  for (const artifactPath of sortedArtifacts) {
    const bytes = readArtifactBytesFromGit(args.gitRef, artifactPath);
    artifacts[artifactPath] = { sha256: sha256Hex(bytes) };
  }

  const createdAt = new Date().toISOString();

  const artifactLines = sortedArtifacts.map(
    (p) => `- ${p}: sha256=${artifacts[p].sha256}`,
  );

  const message = [
    "Co‑Evolution Covenant — authorship proof",
    `Repo: ${args.repo}`,
    `Author (alias): ${args.authorAlias} (GitHub: ${args.github})`,
    "Chain: ethereum",
    `Address: ${wallet.address}`,
    "Artifacts:",
    ...artifactLines,
    `Created: ${createdAt}`,
  ].join("\n");

  const signature = await wallet.signMessage(message);
  const recovered = verifyMessage(message, signature);
  if (recovered.toLowerCase() !== wallet.address.toLowerCase()) {
    throw new Error(`Signature verification failed. recovered=${recovered} expected=${wallet.address}`);
  }

  const proof = {
    schema_version: "coc-author-proof-0.2",
    chain: "ethereum",
    address: wallet.address,
    created_at: createdAt,
    repo: args.repo,
    author_alias: args.authorAlias,
    github: args.github,
    artifacts,
    message,
    signature,
  };

  fs.mkdirSync(path.dirname(args.proofPath), { recursive: true });
  fs.writeFileSync(path.resolve(args.proofPath), JSON.stringify(proof, null, 2) + "\n");

  console.log(`Wrote: ${args.proofPath}`);
  console.log(`Address: ${wallet.address}`);
  console.log(`Artifacts: ${sortedArtifacts.join(", ")}`);
}

main().catch((err) => {
  console.error(`ERROR: ${err?.message || String(err)}`);
  process.exit(1);
});

