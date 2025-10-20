const v1 = new Map();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                return F2;
            }
            function f17(a18) {
                for (let [i28, i29] = (() => {
                        function f20() {
                            return f20;
                        }
                        WebAssembly.compileStreaming(WebAssembly, a9).catch(f20);
                        [3,1689971298,11,-8408,-5,129,-2147483647,-9007199254740992,2115500843,-2147483648] >>> 4294967295;
                        return [0, 10];
                    })();
                    i29;
                    i29--) {
                    const v35 = [4.220462202799492e+307,960699.3672768152,0.0,1.6415958081540465e+308,1.0,-200442.0773325779,-0.0,0.6534319666643899,0.06433014274350057];
                    for (let v36 = 0; v36 < 5; v36++) {
                    }
                    v35.concat();
                }
                return this;
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
        }
        let [,...v38] = v1;
        const v39 = new F10(a8, v38, v38, Map);
        v39.e = v39;
        return v38;
    }
    f6(a5, F2, F2);
    %OptimizeFunctionOnNextCall(f6);
}
new F2();
const v42 = new F2();
new F2(F2, v42);
