function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            f5[4] | 7;
            const v11 = { a: 1.1 };
            for (let v12 = 0; v12 < 5; v12++) {
                v11.a;
                const v16 = new SharedArrayBuffer(7);
                const v18 = new DataView(v16);
                v18.getInt16();
            }
            return a2;
        }
        f5();
        f5(f5);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v22 = new F0();
class C23 {
    static [v22](a25, a26, a27) {
    }
}
