function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            Array.e = Array;
            for (let v9 = 0; v9 < 5; v9++) {
                const t6 = v9 ? { a: 1 } : Object;
                t6.toISOString = 1;
            }
        }
        f5();
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v15 = new F0();
class C16 {
    static [v15](a18, a19, a20) {
    }
}
