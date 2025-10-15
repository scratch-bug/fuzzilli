function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v42 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
        const t4 = WebAssembly.Module;
        const v45 = new t4(v42);
        const t6 = WebAssembly.Instance;
        const v47 = new t6(v45);
        v47.exports;
        function F49(a51, a52, a53, a54) {
            if (!new.target) { throw 'must be called with new'; }
            class C56 extends Uint16Array {
            }
            class C57 extends C56 {
            }
            const v58 = new C57();
            const v59 = class {
            }
            function F60(a62, a63) {
                if (!new.target) { throw 'must be called with new'; }
                const v64 = a63.constructor;
                for (let v65 = 0; v65 < 5; v65++) {
                }
                new v64(109);
            }
            new F60(v59, v58);
        }
        new F49();
        return 96;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v70 = new F0();
new F0(F0, v70);
new F0();
