function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v10 = f6[512] | 7;
            for (let v11 = 0; v11 < 5; v11++) {
                class C12 {
                }
                const v13 = C12.call;
                const v14 = v13?.constructor;
                try { v14(v13); } catch (e) {}
                Array(v10, v13);
            }
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v17 = new F1();
v17.toString();
class C19 {
    static [v17](a21, a22, a23) {
    }
}
