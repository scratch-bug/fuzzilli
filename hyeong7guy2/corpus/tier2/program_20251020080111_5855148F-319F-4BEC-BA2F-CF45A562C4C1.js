function f0(a1, a2, a3) {
    const v39 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
    const v41 = WebAssembly.Module;
    const v42 = new v41(v39);
    function f43() {
        return 115;
    }
    const v44 = { f: f43 };
    const v45 = { m: v44 };
    const t9 = WebAssembly.Instance;
    const v47 = new t9(v42, v45);
    const t11 = v47.exports.main;
    t11();
    return v41;
}
const v54 = new Worker(f0, { type: "function" });
v54.getMessage();
