function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v80 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
    gc();
    const v124 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
    async function f125() {
        const v128 = await WebAssembly.compile(v80);
        const v130 = await WebAssembly.compile(v124);
        const t8 = WebAssembly.Instance;
        const v132 = new t8(v128);
        const v133 = WebAssembly.Instance;
        const v135 = v132.exports.exp;
        const v136 = { imp: v135 };
        const v138 = new v133(v130, { env: v136 });
        const t14 = v138.exports.re_exp;
        t14();
    }
    f125();
    const v146 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
    const v188 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
    async function f189() {
        const v192 = await WebAssembly.compile(v146);
        const v194 = await WebAssembly.compile(v188);
        const t23 = WebAssembly.Instance;
        const v196 = new t23(v192);
        const v197 = WebAssembly.Instance;
        const v199 = v196.exports.exp;
        const v200 = { imp: v199 };
        const v202 = new v197(v194, { env: v200 });
        const t29 = v202.exports.re_exp;
        t29();
    }
    f189();
}
new F1(Uint32Array, F1);
