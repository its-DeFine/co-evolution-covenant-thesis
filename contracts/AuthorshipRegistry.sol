pragma solidity ^0.8.24;

interface IERC1271 {
  function isValidSignature(bytes32 hash, bytes calldata signature) external view returns (bytes4);
}

contract AuthorshipRegistry {
  struct Record {
    address author;
    uint64 registeredAt;
    string uri;
    bool revoked;
  }

  mapping(bytes32 => Record) public records;
  mapping(address => uint256) public nonces;

  event Registered(bytes32 indexed artifactHash, address indexed author, string uri);
  event URIUpdated(bytes32 indexed artifactHash, address indexed author, string uri);
  event Revoked(bytes32 indexed artifactHash, address indexed author);

  error ZeroArtifactHash();
  error AlreadyRegistered();
  error NotAuthor();
  error AlreadyRevoked();
  error DeadlineExpired();
  error InvalidSignature();
  error InvalidSignatureLength();

  bytes32 private constant EIP712_DOMAIN_TYPEHASH =
    keccak256("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)");
  bytes32 private constant REGISTER_TYPEHASH =
    keccak256("Register(bytes32 artifactHash,string uri,uint256 nonce,uint256 deadline)");

  bytes32 private constant NAME_HASH = keccak256("Co-Evolution Covenant Authorship Registry");
  bytes32 private constant VERSION_HASH = keccak256("0");

  bytes4 private constant ERC1271_MAGICVALUE = 0x1626ba7e;
  uint256 private constant SECP256K1N_HALF =
    0x7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0;

  function domainSeparator() public view returns (bytes32) {
    return keccak256(
      abi.encode(EIP712_DOMAIN_TYPEHASH, NAME_HASH, VERSION_HASH, block.chainid, address(this))
    );
  }

  function register(bytes32 artifactHash, string calldata uri) external {
    _register(artifactHash, msg.sender, uri);
  }

  function registerFor(
    bytes32 artifactHash,
    address author,
    string calldata uri,
    uint256 deadline,
    bytes calldata signature
  ) external {
    if (block.timestamp > deadline) revert DeadlineExpired();
    if (author == address(0)) revert InvalidSignature();

    uint256 nonce = nonces[author];
    bytes32 structHash = keccak256(abi.encode(REGISTER_TYPEHASH, artifactHash, keccak256(bytes(uri)), nonce, deadline));
    bytes32 digest = _hashTypedData(structHash);

    if (!_isValidSignature(author, digest, signature)) revert InvalidSignature();

    nonces[author] = nonce + 1;
    _register(artifactHash, author, uri);
  }

  function updateURI(bytes32 artifactHash, string calldata uri) external {
    Record storage record = records[artifactHash];
    if (record.author != msg.sender) revert NotAuthor();
    if (record.revoked) revert AlreadyRevoked();
    record.uri = uri;
    emit URIUpdated(artifactHash, msg.sender, uri);
  }

  function revoke(bytes32 artifactHash) external {
    Record storage record = records[artifactHash];
    if (record.author != msg.sender) revert NotAuthor();
    if (record.revoked) revert AlreadyRevoked();
    record.revoked = true;
    emit Revoked(artifactHash, msg.sender);
  }

  function _register(bytes32 artifactHash, address author, string calldata uri) internal {
    if (artifactHash == bytes32(0)) revert ZeroArtifactHash();

    Record storage existing = records[artifactHash];
    if (existing.author != address(0)) revert AlreadyRegistered();

    records[artifactHash] = Record({ author: author, registeredAt: uint64(block.timestamp), uri: uri, revoked: false });
    emit Registered(artifactHash, author, uri);
  }

  function _hashTypedData(bytes32 structHash) internal view returns (bytes32) {
    return keccak256(abi.encodePacked("\x19\x01", domainSeparator(), structHash));
  }

  function _isValidSignature(address signer, bytes32 digest, bytes calldata signature) internal view returns (bool) {
    if (signer.code.length > 0) {
      try IERC1271(signer).isValidSignature(digest, signature) returns (bytes4 magicValue) {
        return magicValue == ERC1271_MAGICVALUE;
      } catch {
        return false;
      }
    }

    address recovered = _recover(digest, signature);
    return recovered == signer;
  }

  function _recover(bytes32 digest, bytes calldata signature) internal pure returns (address) {
    if (signature.length != 65) revert InvalidSignatureLength();

    bytes32 r;
    bytes32 s;
    uint8 v;
    // solhint-disable-next-line no-inline-assembly
    assembly {
      r := calldataload(signature.offset)
      s := calldataload(add(signature.offset, 32))
      v := byte(0, calldataload(add(signature.offset, 64)))
    }

    if (uint256(s) > SECP256K1N_HALF) revert InvalidSignature();
    if (v < 27) v += 27;
    if (v != 27 && v != 28) revert InvalidSignature();

    address recovered = ecrecover(digest, v, r, s);
    if (recovered == address(0)) revert InvalidSignature();
    return recovered;
  }
}

