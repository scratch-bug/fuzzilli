function f1(a2, a3, a4) {
    const v40 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
    const t2 = WebAssembly.Module;
    const v43 = new t2(v40);
    const v44 = { f: Int8Array };
    const v45 = { m: v44 };
    const t6 = WebAssembly.Instance;
    const v47 = new t6(v43, v45);
    const t8 = v47.exports.main;
    t8(Int8Array, Int8Array, Int8Array, v40);
    return Int8Array;
}
const v54 = new Worker(f1, { type: "function" });
v54.getMessage();
