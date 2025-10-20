function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v8 = this.constructor;
            class C9 extends v8 {
            }
            Array.isArray(v8);
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v13 = new F1();
class C14 {
    static [v13](a16, a17, a18) {
    }
}
