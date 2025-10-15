function poc(i) {
  if (i === 999) {
    try {
      const wasm_code = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 1, 123, 0, 3, 2, 1, 0, 7, 5, 1, 1, 102, 0, 0, 10, 4, 1, 2, 0, 11]);
      const module = new WebAssembly.Module(wasm_code);
      const instance = new WebAssembly.Instance(module);
      const f = instance.exports.f;
      f(0);
    } catch (e) {}
  }
}
for (let i = 0; i < 1000; ++i) {
  poc(i);
}