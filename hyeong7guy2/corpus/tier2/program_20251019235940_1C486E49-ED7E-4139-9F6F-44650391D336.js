function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                return F8;
            }
            function f15(a16) {
                for (let [i23, i24] = (() => {
                        function f18() {
                            return WebAssembly;
                        }
                        WebAssembly.compileStreaming(a16, a11).catch(f18);
                        return [0, 10];
                    })();
                    i24;
                    parseInt("und🤯efined"), i24--) {
                }
                return F0;
            }
            Object.defineProperty(this, "e", { get: f14, set: f15 });
        }
        const v33 = new F8(F8, f4, a5, a7);
        v33.e = v33;
        return a2;
    }
    f4(f4, F0, a2);
    %OptimizeFunctionOnNextCall(f4);
}
const v35 = new F0();
const v36 = new F0(v35, v35);
new F0(v36, v35);
