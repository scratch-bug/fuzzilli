function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            f5[4] | 7;
            const v11 = { a: 1.1 };
            function f12(a13) {
                return F0;
            }
            const v14 = class extends f12 {
            }
            try { v14(); } catch (e) {}
            v11.a;
            return a3;
        }
        f5(f5(a2));
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v19 = new F0();
class C20 {
    static [v19](a22, a23, a24) {
    }
}
