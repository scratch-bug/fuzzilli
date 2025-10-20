function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v8 = [a7];
            for (let v9 = 0; v9 < 5; v9++) {
            }
            v8[4];
            const v11 = this.constructor;
            class C12 extends v11 {
            }
            Array.isArray(v11);
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v16 = new F1(Array, Array);
class C17 {
    static [v16](a19, a20, a21) {
    }
}
