const v0 = class {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        const v9 = { a: v0 };
        const v11 = { a: 1.1 };
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            this.f = a17;
        }
        new F12();
        v11.a;
        return this;
    }
    f5(a3, a3, f5);
    %OptimizeFunctionOnNextCall(f5);
}
new F1(v0, F1);
const v22 = new F1(v0, v0);
new F1(v0, v22);
