gc();
const v37 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t2 = WebAssembly.Module;
const v40 = new t2(v37);
function f41() {
    try { WebAssembly(); } catch (e) {}
    return 109;
}
const v43 = { f: f41 };
const v44 = { m: v43 };
const t10 = WebAssembly.Instance;
const v46 = new t10(v40, v44);
const t12 = v46.exports.main;
t12();
