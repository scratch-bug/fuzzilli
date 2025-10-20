function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = [f4];
            function F9() {
                if (!new.target) { throw 'must be called with new'; }
                for (let v11 = 0; v11 < 5; v11++) {
                    const v13 = { a: 1 };
                }
                const v15 = { a: 1.1 };
            }
            new F9();
            v7[v7] = Object;
            for (let i18 = 8; i18 < 20000; i18++) {
                const v26 = i18 ? { a: 1 } : Object;
                v26.toISOString = v26;
            }
            return a6;
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v27 = new F0(F0, F0);
v27.toString();
class C29 {
    static [v27](a31, a32, a33) {
    }
    static [v27](a35, a36, a37) {
    }
}
