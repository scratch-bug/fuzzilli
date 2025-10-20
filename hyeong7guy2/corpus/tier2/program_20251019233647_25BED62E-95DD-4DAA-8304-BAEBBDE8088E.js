function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                return a2;
            }
            function f15(a16) {
                for (let [i25, i26] = (() => {
                        function f18() {
                            return a10;
                        }
                        WebAssembly.compileStreaming().catch(f18);
                        return [[3,1689971298,11,-8408,-5,129,-2147483647,-9007199254740992,2115500843,-2147483648] >>> 4294967295, -1024];
                    })();
                    i26;
                    ) {
                    return Object;
                }
                return a16;
            }
            Object.defineProperty(this, "e", { get: f14, set: f15 });
        }
        const v32 = new F8();
        v32.e = v32;
        return a6;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v34 = new F0();
new F0(v34, v34);
new F0();
