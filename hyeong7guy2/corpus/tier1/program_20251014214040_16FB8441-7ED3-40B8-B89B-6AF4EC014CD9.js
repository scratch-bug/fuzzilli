function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = a6 ?? a6;
            const v9 = [];
            function f10() {
                return a6;
            }
            function f11(a12) {
                return v7;
            }
            Object.defineProperty(v9, 9, { configurable: true, get: f10, set: f11 });
            const v13 = {};
            v13.string = 9;
            for (let v14 = 0; v14 < 5; v14++) {
            }
            v13.string = f11;
            v7 ?? v7;
            const v17 = (3)[4];
            v17 ?? v17;
            const v20 = v17 | 7;
            const v21 = v20 >>> v20;
            const v22 = v21 * v21;
            eval();
            return v22;
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v27 = new F0(F0, F0);
class C28 {
    static [v27](a30, a31, a32) {
    }
}
