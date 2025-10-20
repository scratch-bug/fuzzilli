const v1 = new Map();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                return this;
            }
            function f17(a18) {
                for (let [i27, i28] = (() => {
                        function f20() {
                        }
                        WebAssembly.compileStreaming(WebAssembly, a9).catch(f20);
                        return [[3,1689971298,11,-8408,-5,129,-2147483647,-9007199254740992,2115500843,-2147483648] >>> 4294967295, 10];
                    })();
                    i28;
                    i28--) {
                    const v34 = [4.220462202799492e+307,960699.3672768152,0.0,1.6415958081540465e+308,1.0,-200442.0773325779,-0.0,0.6534319666643899,0.06433014274350057];
                    for (let v35 = 0; v35 < 5; v35++) {
                    }
                    v34.concat();
                }
                return a18;
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
        }
        let [,...v37] = v1;
        const v38 = new F10();
        v38.e = v38;
        return a4;
    }
    f6(a5, F2, F2);
    %OptimizeFunctionOnNextCall(f6);
}
const v40 = new F2(Map, Map);
new F2();
new F2(v40, Map);
