function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
try { F0.__proto__ = F0; } catch (e) {}
const v42 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v84 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f85() {
    const v88 = await WebAssembly.compile(v42);
    const v90 = await WebAssembly.compile(v84);
    const t9 = WebAssembly.Instance;
    const v92 = new t9(v88);
    const v93 = WebAssembly.Instance;
    const v94 = v92.exports;
    const v95 = v94.exp;
    const v96 = { imp: v95 };
    const v98 = new v93(v90, { env: v96 });
    const v99 = v98.exports;
    const v101 = WebAssembly.promising(v99.re_exp);
    v101(v101, v99);
    return v94;
}
f85();
