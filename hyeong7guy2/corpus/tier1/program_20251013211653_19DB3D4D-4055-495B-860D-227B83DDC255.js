const v38 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v80 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f81() {
    const v84 = await WebAssembly.compile(v38);
    const v86 = await WebAssembly.compile(v80);
    const t5 = WebAssembly.Instance;
    const v88 = new t5(v84);
    const v89 = WebAssembly.Instance;
    const v91 = v88.exports.exp;
    const v92 = { imp: v91 };
    const v94 = new v89(v86, { env: v92 });
    const t11 = WebAssembly.promising(v94.exports.re_exp);
    t11();
}
f81();
