const v1 = new Map();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                return f16;
            }
            function f17(a18) {
                for (let [i29, i30] = (() => {
                        const t0 = Temporal.PlainDate;
                        new t0(6, 6, 6);
                        function f24() {
                            return a12;
                        }
                        WebAssembly.compileStreaming(WebAssembly, a9).catch(f24);
                        return [0, 10];
                    })();
                    i30;
                    i30--) {
                    const v36 = [4.220462202799492e+307,960699.3672768152,0.0,1.6415958081540465e+308,1.0,-200442.0773325779,-0.0,0.6534319666643899,0.06433014274350057];
                    for (let v37 = 0; v37 < 5; v37++) {
                    }
                    function F38(a40) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    function f41(a42) {
                        return a42;
                    }
                    v36.concat();
                }
                return a18;
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
        }
        let [,...v44] = v1;
        const v45 = new F10(F2, F2, this, F2);
        v45.e = v45;
        return a5;
    }
    f6(a5, this, this);
    %OptimizeFunctionOnNextCall(f6);
}
new F2();
const v48 = new F2(Map, Map);
new F2(Map, v48);
