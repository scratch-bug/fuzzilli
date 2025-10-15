function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9, a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        const v84 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
        gc();
        const v128 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
        async function f129() {
            const v132 = await WebAssembly.compile(v84);
            const v134 = await WebAssembly.compile(v128);
            const t10 = WebAssembly.Instance;
            const v136 = new t10(v132);
            const v137 = WebAssembly.Instance;
            const v139 = v136.exports.exp;
            const v140 = { imp: v139 };
            const v142 = new v137(v134, { env: v140 });
            const t16 = v142.exports.re_exp;
            t16();
            return a10;
        }
        f129();
        const v150 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
        const v192 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
        async function f193() {
            const v196 = await WebAssembly.compile(v150);
            const v198 = await WebAssembly.compile(v192);
            const t25 = WebAssembly.Instance;
            const v200 = new t25(v196);
            const v201 = WebAssembly.Instance;
            const v203 = v200.exports.exp;
            const v204 = { imp: v203 };
            const v206 = new v201(v198, { env: v204 });
            const t32 = v206.exports.re_exp;
            t32();
            return v196;
        }
        f193();
    }
    new F6();
}
new F0();
new F0();
