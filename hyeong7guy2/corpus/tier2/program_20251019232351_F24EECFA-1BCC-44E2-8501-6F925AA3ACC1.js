const v0 = [];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v8 = v0.constructor;
            const v10 = v8(f5, v8)[1];
            v10.isArray(v10);
            v10.d = v10;
            return a4;
        }
        f6(a4);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v13 = new F1();
class C14 {
    static [v13](a16, a17, a18) {
    }
    static [v13](a20, a21, a22) {
    }
}
