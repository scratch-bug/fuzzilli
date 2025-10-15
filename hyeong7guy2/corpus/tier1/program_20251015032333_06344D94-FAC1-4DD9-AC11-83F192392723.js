function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v9 = f5[4] | 7;
            const v11 = { a: 1.1 };
            const v12 = this.a;
            const v15 = new Float32Array(9);
            v15[2] = v15;
            v12 | v11;
            return v9;
        }
        f5(a3);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v19 = new F0(F0, F0);
class C20 {
    static [v19](a22, a23, a24) {
    }
}
