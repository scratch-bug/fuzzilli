function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v79 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
    gc();
    const v123 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
    async function f124() {
        const v126 = WebAssembly.compile(v79);
        function f127() {
            function f128() {
            }
            class C129 extends f128 {
            }
            class C130 extends C129 {
            }
            new C130();
            return v126;
        }
        v126.constructor = f127;
        const v132 = await v126;
        const v134 = await WebAssembly.compile(v123);
        const t20 = WebAssembly.Instance;
        const v136 = new t20(v132);
        const v137 = WebAssembly.Instance;
        const v139 = v136.exports.exp;
        const v140 = { imp: v139 };
        const v142 = new v137(v134, { env: v140 });
        const t26 = v142.exports.re_exp;
        t26();
    }
    f124();
    new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
    new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
}
new F1(Uint32Array, F1);
