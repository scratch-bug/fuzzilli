function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v10 = f6[512] + 7;
            for (let v11 = 0; v11 < 5; v11++) {
                class C12 {
                }
                const v13 = C12.f;
                try { v13(a4, v11, this); } catch (e) {}
                Array(v10, v13);
            }
            return 7;
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v16 = new F1();
v16.toString();
class C18 {
    static [v16](a20, a21, a22) {
    }
}
