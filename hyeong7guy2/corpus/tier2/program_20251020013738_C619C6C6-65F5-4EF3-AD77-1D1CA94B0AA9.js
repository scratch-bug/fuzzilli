function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f10(a11) {
                for (let v12 = 0; v12 < 5; v12++) {
                }
                const v13 = `string${536870912n}undefined`;
                const v14 = [-9223372036854775808];
                try { v14.forEach(0); } catch (e) {}
                v13.charAt(0);
                return a4;
            }
            f10(F1);
            f10();
            const v19 = [];
            v19[11] = Infinity;
            const v20 = v19[4];
            function f22() {
                class C23 {
                }
                return 0;
            }
            f22();
            v20 >>> 7;
        }
        f6(f5);
        f6(a4);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v28 = new F1(F1, F1);
class C29 {
    static [v28](a31, a32, a33) {
    }
}
