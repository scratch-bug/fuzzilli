const v33 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
const wasmCode = v33;
const t2 = WebAssembly.Module;
const v37 = new t2(wasmCode);
const wasmModule = v37;
const t5 = WebAssembly.Instance;
const v40 = new t5(wasmModule);
const wasmInstance = v40;
const wasmObject = wasmInstance.exports.f;
function poc(a46) {
    const v48 = [1];
    let v49;
    try { v49 = a46.concat(v48); } catch (e) {}
    return v49;
}
for (let i51 = 0; i51 < 10000; i51++) {
}
let triggered = false;
if (!triggered) {
    const victim = [];
    Reflect.setPrototypeOf(victim, wasmObject);
    triggered = true;
}
