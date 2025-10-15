let wasm_buffer = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 10, 2, 94, 127, 0, 96, 1, 110, 0, 0, 2, 7, 1, 1, 109, 1, 102, 0, 1, 3, 4, 3, 0, 0, 0, 6, 8, 1, 1, 110, 0, 1, 208, 0, 11, 7, 31, 3, 4, 109, 97, 105, 110, 0, 0, 10, 115, 101, 116, 95, 103, 95, 103, 111, 111, 100, 0, 1, 9, 115, 101, 116, 95, 103, 95, 98, 97, 100, 0, 2, 10, 36, 3, 7, 0, 35, 0, 16, 0, 11, 10, 0, 65, 5, 251, 23, 0, 36, 0, 11, 7, 0, 208, 0, 36, 0, 11]);

let flag = false;

function f(arg) {
  if (flag) {
    try {
      arg.length;
    } catch (e) {}
  } else {
    arg.length;
  }
}

let wasm_module = new WebAssembly.Module(wasm_buffer);
let imports = {
  m: {
    f: f
  }
};
let instance = new WebAssembly.Instance(wasm_module, imports);

let {
  main,
  set_g_good,
  set_g_bad
} = instance.exports;

for (let i = 0; i < 25000; ++i) {
  set_g_good();
  main();
}

flag = true;
set_g_bad();
main();