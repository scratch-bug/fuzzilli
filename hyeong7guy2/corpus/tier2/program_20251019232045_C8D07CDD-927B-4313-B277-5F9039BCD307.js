function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = f5[4];
            v7 | 7;
            const v11 = { a: 1.1 };
            function F12() {
                if (!new.target) { throw 'must be called with new'; }
            }
            class C14 {
            }
            try { new C14(F12, ...F12); } catch (e) {}
            v7 - v11;
        }
        f5.apply();
        f5(F0);
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
