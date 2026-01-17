import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

import { verifyMessage } from "ethers";

function parseArgs(argv) {
  const args = {
    proofPath: "proofs/author-proof.ethereum.json",
    gitRef: "HEAD",
    worktree: false,
    quiet: false,
  };

  for (let i = 2; i < argv.length; i++) {
    const token = argv[i];
    if (token === "--proof" && argv[i + 1]) {
      args.proofPath = argv[++i];
      continue;
    }
    if ((token === "--git-ref" || token === "--ref") && argv[i + 1]) {
      args.gitRef = argv[++i];
      continue;
    }
    if (token === "--worktree") {
      args.worktree = true;
      args.gitRef = null;
      continue;
    }
    if (token === "--quiet" || token === "-q") {
      args.quiet = true;
      continue;
    }
    if (token === "--help" || token === "-h") {
      console.log(
        [
          "Usage: node scripts/verify-author-proof.mjs [options]",
          "",
          "Options:",
          "  --proof <path>     Proof JSON path (default: proofs/author-proof.ethereum.json)",
          "  --git-ref <ref>    Verify artifacts at a git ref/commit (default: HEAD)",
          "  --worktree         Verify artifacts from the working tree (not recommended)",
          "  -q, --quiet        Only print errors",
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

function readArtifactBytesFromFs(artifactPath) {
  return fs.readFileSync(path.resolve(artifactPath));
}

function fail(message) {
  console.error(`ERROR: ${message}`);
  process.exit(1);
}

function main() {
  const args = parseArgs(process.argv);

  const proofRaw = fs.readFileSync(path.resolve(args.proofPath), "utf8");
  const proof = JSON.parse(proofRaw);

  if (!proof?.message || !proof?.signature || !proof?.address) {
    fail("Invalid proof: missing message/signature/address");
  }

  const recovered = verifyMessage(proof.message, proof.signature);
  if (recovered.toLowerCase() !== String(proof.address).toLowerCase()) {
    fail(
      `Signature does not recover the claimed address. recovered=${recovered} claimed=${proof.address}`,
    );
  }

  const artifacts = proof.artifacts || {};
  const artifactEntries = Object.entries(artifacts);
  if (artifactEntries.length === 0) {
    fail("Invalid proof: no artifacts");
  }

  const results = [];
  for (const [artifactPath, meta] of artifactEntries) {
    if (!meta?.sha256) {
      fail(`Invalid proof: artifacts[${artifactPath}] missing sha256`);
    }

    const bytes = args.gitRef
      ? readArtifactBytesFromGit(args.gitRef, artifactPath)
      : readArtifactBytesFromFs(artifactPath);
    const computedSha256 = sha256Hex(bytes);
    const expectedSha256 = String(meta.sha256).toLowerCase();

    if (computedSha256 !== expectedSha256) {
      fail(
        `Artifact hash mismatch for ${artifactPath}. expected=${expectedSha256} got=${computedSha256}`,
      );
    }

    results.push({ artifactPath, sha256: computedSha256 });
  }

  if (!args.quiet) {
    console.log("OK: signature and artifact hashes verified");
    console.log(`Address: ${proof.address}`);
    if (args.gitRef) console.log(`Git ref: ${args.gitRef}`);
    if (args.worktree) console.log("Source: working tree");
    for (const r of results) console.log(`- ${r.artifactPath}: sha256=${r.sha256}`);
  }
}

main();
