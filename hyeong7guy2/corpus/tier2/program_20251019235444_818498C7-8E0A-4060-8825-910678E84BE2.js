const v72 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
gc();
const v116 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f117() {
    const v119 = WebAssembly.compile(v72);
    v119.constructor = f117;
    const v120 = await v119;
    const v122 = await WebAssembly.compile(v116);
    const t8 = WebAssembly.Instance;
    const v124 = new t8(v120);
    const v125 = WebAssembly.Instance;
    const v127 = v124.exports.exp;
    const v128 = { imp: v127 };
    const v130 = new v125(v122, { env: v128 });
    const t14 = v130.exports.re_exp;
    t14();
}
const v137 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
for (let v140 = 0; v140 < 42; v140++) {
    f117();
}
async function f142() {
    await WebAssembly.compile(v137);
    gc(WebAssembly);
    return 118;
}
f142();
