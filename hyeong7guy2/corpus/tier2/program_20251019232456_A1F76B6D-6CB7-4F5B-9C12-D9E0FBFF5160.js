function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                return f16;
            }
            function f17(a18) {
                const v19 = typeof a3;
                v19 === v19;
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
            this.e = -1;
        }
        const v21 = new F10();
        v21.e = v21;
        return F10;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
new F1("NFD");
const v24 = new F1();
const t24 = v24.constructor;
new t24();
for (let i28 = 10, i29 = 10; i29; i29--) {
}
