function f0(a1) {
    return f0;
}
const v37 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t4 = WebAssembly.Module;
const v40 = new t4(v37);
const v41 = { f: f0 };
const v42 = { m: v41 };
const t8 = WebAssembly.Instance;
const v44 = new t8(v40, v42);
const v46 = v44.exports.main;
const v81 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t12 = WebAssembly.Module;
const v83 = new t12(v81);
const v84 = { f: v46 };
const v85 = { m: v84 };
const t16 = WebAssembly.Instance;
new t16(v83, v85);
