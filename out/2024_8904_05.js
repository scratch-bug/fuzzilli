let arr = [1.1];
let p;
let trigger = false;

function hot_function(a) {
  return a[0];
}

function jspi_callback() {
  if (trigger) {
    arr[0] = {};
  }
  hot_function(arr);
  return p;
}

const wasm_buffer = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 113, 2, 10, 1, 1, 109, 2, 99, 98, 0, 0, 3, 2, 1, 0, 7, 8, 1, 4, 109, 97, 105, 110, 0, 1, 10, 9, 1, 7, 0, 16, 0, 26, 11]);
const wasm_module = new WebAssembly.Module(wasm_buffer);
const instance = new WebAssembly.Instance(wasm_module, {
  m: {
    cb: jspi_callback
  }
});
const promising_main = WebAssembly.promising(instance.exports.main);

for (let i = 0; i < 25000; ++i) {
  p = Promise.resolve(0);
  promising_main();
}

trigger = true;
p = new Promise(r => {});
promising_main();