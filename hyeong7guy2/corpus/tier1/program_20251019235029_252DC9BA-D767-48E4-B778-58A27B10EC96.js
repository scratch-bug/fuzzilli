function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            for (let v8 = 0; v8 < 5; v8++) {
                const v10 = { a: 1 };
                const t6 = v8 ? v10 : Object;
                t6.toISOString = v10;
            }
            const v12 = f5[4];
            v12 | 7;
            const v16 = { a: 1.1 };
            return v12;
        }
        f5(f5);
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
