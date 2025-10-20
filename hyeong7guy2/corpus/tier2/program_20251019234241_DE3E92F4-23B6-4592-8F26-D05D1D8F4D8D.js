const v2 = new Int32Array(6, 6);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            function f18() {
                return a14;
            }
            function f19(a20) {
                const v21 = v2.length;
                function F22(a24, a25) {
                    if (!new.target) { throw 'must be called with new'; }
                    for (const v26 of 6) {
                        f7(v26, f18, v21);
                    }
                }
                return this;
            }
            Object.defineProperty(this, "e", { get: f18, set: f19 });
            this.e = -1;
        }
        new F12();
        return a5;
    }
    f7(v2, Int32Array, this);
    %OptimizeFunctionOnNextCall(f7);
}
const v30 = new F3();
new F3(F3, v30);
new F3();
