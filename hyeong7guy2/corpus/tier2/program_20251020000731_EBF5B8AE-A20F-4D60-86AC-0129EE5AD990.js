function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v8 = this.constructor;
            v8.caller;
            class C10 extends v8 {
            }
            Array.isArray(v8);
            return a7;
        }
        f6(Array);
        f6(a3);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v14 = new F1();
class C15 {
    static [v14](a17, a18, a19) {
    }
}
