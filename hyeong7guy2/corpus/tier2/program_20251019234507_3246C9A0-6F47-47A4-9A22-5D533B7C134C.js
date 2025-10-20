function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                return this;
            }
            function f15(a16) {
                for (let [i25, i26] = (() => {
                        function f18() {
                            return WebAssembly;
                        }
                        WebAssembly.compileStreaming(a13, a16).catch(f18);
                        return [[3,1689971298,11,-8408,-5,129,-2147483647,-9007199254740992,2115500843,-2147483648] >>> 4294967295, 10];
                    })();
                    i26;
                    ) {
                    i26 != i26;
                    return Object;
                }
                return f15;
            }
            Object.defineProperty(this, "e", { get: f14, set: f15 });
        }
        const v33 = new F8(this, F8, a6, a3);
        v33.e = v33;
        return F8;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v35 = new F0(F0, F0);
const v36 = new F0(v35, v35);
new F0(v36, v35);
