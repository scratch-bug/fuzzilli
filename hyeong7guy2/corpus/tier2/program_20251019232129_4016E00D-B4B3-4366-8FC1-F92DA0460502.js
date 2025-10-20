const v0 = [];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        const v6 = {};
        function f7(a8) {
            const v9 = a8 >>> a8;
            const v10 = v0.constructor;
            const t8 = v10(f5, v10, v6, v9)[1];
            t8(v9);
        }
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v14 = new F1();
class C15 {
    static [v14](a17, a18, a19) {
    }
    static [v14](a21, a22, a23) {
    }
}
