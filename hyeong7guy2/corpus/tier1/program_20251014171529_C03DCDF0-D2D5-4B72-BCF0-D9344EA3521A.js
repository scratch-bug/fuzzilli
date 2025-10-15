function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            f5[4] | 7;
            const v11 = { a: 1.1 };
            for (let v12 = 0; v12 < 5; v12++) {
                const v13 = v12 * v12;
                function f14(a15) {
                    return f14;
                }
                const v16 = class extends f14 {
                    static 180 = v13;
                }
                v11.a;
            }
            return a2;
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v20 = new F0();
class C21 {
    static [v20](a23, a24, a25) {
    }
}
