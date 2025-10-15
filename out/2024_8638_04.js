function js_func() {
  return 1;
}

const wasm_code = new Uint8Array([
  0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00,
  0x01, 0x06, 0x01, 0x60, 0x01, 0x7f, 0x00,
  0x02, 0x07, 0x01, 0x01, 0x6d, 0x01, 0x66, 0x00, 0x00,
  0x07, 0x05, 0x01, 0x01, 0x65, 0x00, 0x00
]);

const wasm_imports = {
  m: { f: js_func }
};

const wasm_module = new WebAssembly.Module(wasm_code);
const instance = new WebAssembly.Instance(wasm_module, wasm_imports);

const reexported_func = instance.exports.e;

let trigger = false;
for (let i = 0; i < 20000; i++) {
  if (i == 19999) {
    trigger = true;
  }
  reexported_func(trigger);
}

if (trigger) {
  reexported_func(true);
}