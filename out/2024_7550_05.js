const wasm_code = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,95,96,0,0,3,2,1,0,7,17,1,13,99,114,101,97,116,101,95,115,116,114,117,99,116,0,0,10,7,1,5,0,251,0,0,11]);
const wasm_mod = new WebAssembly.Module(wasm_code);
const wasm_inst = new WebAssembly.Instance(wasm_mod);
const wasm_struct = wasm_inst.exports.create_struct();

function hot_function(o) {
    return o.x;
}

const obj = {};
const normal_proto = { x: 1 };
Object.setPrototypeOf(obj, normal_proto);

let trigger = false;
for (let i = 0; i < 25000; i++) {
    hot_function(obj);
    if (i === 24998) {
        trigger = true;
    }
}

if (trigger) {
    Object.setPrototypeOf(obj, wasm_struct);
    hot_function(obj);
}