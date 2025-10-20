gc();
const v43 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v85 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f86() {
    const v89 = await WebAssembly.compile(v43);
    const v91 = await WebAssembly.compile(v85);
    const t6 = WebAssembly.Instance;
    const v93 = new t6(v89);
    const v94 = WebAssembly.Instance;
    const v96 = v93.exports.exp;
    const v97 = { imp: v96 };
    const v99 = new v94(v91, { env: v97 });
    v99.exports.re_exp;
}
f86();
for (let i105 = 0, i106 = 10; i106; i106--) {
}
for (let i113 = 7; i113 < 20000; i113++) {
}
