function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                return a8;
            }
            function f17(a18) {
                for (let i21 = 1717365178; typeof 4096 === "string";) {
                }
                return a14;
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
            this.e = -1;
        }
        const v26 = new F10(this, F1, 4096, a4);
        return v26;
    }
    f5(this, F1, a4);
    %OptimizeFunctionOnNextCall(f5);
}
new F1();
new F1(4096, F1);
new F1(4096, F1);
