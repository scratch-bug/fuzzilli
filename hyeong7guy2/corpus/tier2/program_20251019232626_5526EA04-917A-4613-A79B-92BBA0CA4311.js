new Map();
const v44 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
gc({ execution: "sync" });
const v90 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f91() {
    const v94 = await WebAssembly.compile(v44);
    const v95 = WebAssembly.compile(v90);
    Math.floor(0);
    const v98 = await v95;
    const t8 = WebAssembly.Instance;
    const v100 = new t8(v94);
    const v101 = WebAssembly.Instance;
    const v103 = v100.exports.exp;
    const v104 = { imp: v103 };
    const v106 = new v101(v98, { env: v104 });
    const v107 = v106.exports;
    const v109 = WebAssembly.promising(v107.re_exp);
    v109(v109, v107);
    return 1;
}
for (let v112 = 0; v112 < 42; v112++) {
    f91();
}
