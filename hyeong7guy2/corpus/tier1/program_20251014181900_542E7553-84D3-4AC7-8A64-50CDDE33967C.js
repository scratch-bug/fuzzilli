const v0 = [0.5018696678165512,1000000.0,-1e-15,-4.0,8.525871126444223];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            function f17() {
                return v0;
            }
            function f18(a19) {
                for (const v20 of v0) {
                    a19[Symbol] = a13;
                }
                return v0;
            }
            Object.defineProperty(this, "e", { get: f17, set: f18 });
            this.e = -1;
        }
        new F11();
        return a7;
    }
    f5(this, a4, this);
    %OptimizeFunctionOnNextCall(f5);
}
new F1();
new F1();
new F1();
