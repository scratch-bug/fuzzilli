function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = a6 ** a6;
            v7 ?? v7;
            const v10 = (-12)[4];
            v10 ?? v10;
            const v13 = v10 | 51521;
            const v14 = v13 >>> v13;
            v14 * v14;
            eval();
            return -12;
        }
        f5();
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v20 = new F0(F0, F0);
class C21 {
    static [v20](a23, a24, a25) {
    }
}
