gc();
const v40 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v82 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f83() {
    const v85 = WebAssembly.compile(v40);
    function f86(a87, a88) {
        return a87;
    }
    v85.constructor = f86;
    const v89 = await v85;
    const v91 = await WebAssembly.compile(v82);
    const t11 = WebAssembly.Instance;
    const v93 = new t11(v89);
    const v94 = WebAssembly.Instance;
    const v95 = v93.exports;
    const v96 = v95.exp;
    const v97 = { imp: v96 };
    const v99 = new v94(v91, { env: v97 });
    const v100 = v99.exports;
    const v102 = WebAssembly.promising(v100.re_exp);
    v102(v102, v100);
    return v95;
}
f83();
