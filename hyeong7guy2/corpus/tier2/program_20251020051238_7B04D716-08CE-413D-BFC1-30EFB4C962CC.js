Symbol.iterator;
const v5 = [];
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        function f11(a12) {
            const v13 = a12 >>> a12;
            const v14 = v5.constructor;
            const t8 = v14(v14, v14)[1];
            t8(v13, f10);
        }
        %OptimizeMaglevOnNextCall(f11);
        return f11;
    }
    Object.defineProperty(this, "toString", { get: f10 });
}
const v18 = new F6();
class C19 {
    static [v18](a21, a22, a23) {
    }
    static [v18](a25, a26, a27) {
    }
}
