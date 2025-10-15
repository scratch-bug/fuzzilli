function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v9 = f5[4] | 7;
            new a2(F0, v9, a6, v9, F0);
            return a6;
        }
        f5();
        f5(this);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    f4.prototype;
    Object.defineProperty(this, "toString", { get: f4 });
}
const v14 = new F0(F0);
class C15 {
    static [v14](a17, a18, a19) {
    }
}
