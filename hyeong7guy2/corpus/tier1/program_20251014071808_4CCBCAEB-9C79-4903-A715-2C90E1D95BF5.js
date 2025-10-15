const v35 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t1 = WebAssembly.Module;
const v38 = new t1(v35);
function f39() {
    try { WebAssembly(f39, 4, v35, f39, 115); } catch (e) {}
    return 4;
}
const v41 = { f: f39 };
const v42 = { m: v41 };
const t9 = WebAssembly.Instance;
const v44 = new t9(v38, v42);
const t11 = v44.exports.main;
t11();
