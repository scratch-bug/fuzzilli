const v32 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,5,1,1,101,0,0]);
const t1 = WebAssembly.Module;
const v35 = new t1(v32);
function f36() {
    return WebAssembly;
}
const v37 = { f: f36 };
const v38 = { m: v37 };
const t8 = WebAssembly.Instance;
const v40 = new t8(v35, v38);
WebAssembly.promising(v40.exports.e);
