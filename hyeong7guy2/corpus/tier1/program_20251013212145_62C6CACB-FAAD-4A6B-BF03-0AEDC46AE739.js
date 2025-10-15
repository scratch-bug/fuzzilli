const v38 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,9,1,3,105,109,112,1,102,0,0,7,9,1,5,101,120,112,95,102,0,0]);
const wasm_code = v38;
const v40 = () => {
};
const v41 = { f: v40 };
const import_object = { imp: v41 };
const t6 = WebAssembly.Module;
const v46 = new t6(wasm_code);
const module = v46;
const t9 = WebAssembly.Instance;
const v49 = new t9(module, import_object);
const instance = v49;
const f = instance.exports.exp_f;
for (let i55 = 0; i55 < 25000; ++i55) {
    f();
}
