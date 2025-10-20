function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = { a: 1.1 };
            for (let v9 = 0; v9 < 5; v9++) {
                const v10 = v9 >>> v9;
                v10 - v10;
            }
            f5 - v8;
            return a6;
        }
        f5.apply(f5);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v15 = new F0(F0, F0);
class C16 {
    static [v15](a18, a19, a20) {
    }
}
