function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = f5[4];
            v7 | -24131;
            const v11 = { a: 1.1 };
            function f12() {
                return f4;
            }
            class C13 {
            }
            try { f12(C13, C13, C13, f12, ...-26614n); } catch (e) {}
            v7 - v11;
        }
        f5.apply();
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
