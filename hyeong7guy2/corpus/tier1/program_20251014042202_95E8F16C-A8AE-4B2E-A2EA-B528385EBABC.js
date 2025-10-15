const v38 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v80 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f81() {
    const v84 = await WebAssembly.compile(v38);
    const v85 = WebAssembly.compile(v80);
    Math.floor();
    const v88 = await v85;
    const t6 = WebAssembly.Instance;
    const v90 = new t6(v84);
    const v91 = WebAssembly.Instance;
    const v92 = v90.exports;
    const v93 = v92.exp;
    const v94 = { imp: v93 };
    const v96 = new v91(v88, { env: v94 });
    const v97 = v96.exports;
    const v98 = v97.re_exp;
    v98(v98, v97);
    function F101(a103, a104, a105) {
        if (!new.target) { throw 'must be called with new'; }
    }
    for (let i107 = 0;
        (() => {
            const v109 = i107 < 20000;
            F101[i107] <<= 64;
            return v109;
        })();
        i107++) {
    }
    return v92;
}
f81();
