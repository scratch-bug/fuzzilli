function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = ([a6,a6])[4];
            function F10() {
                if (!new.target) { throw 'must be called with new'; }
            }
            class C12 {
            }
            try { new C12(F10, ...F10); } catch (e) {}
            return v8 | 7;
        }
        f5(f5());
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v17 = new F0(F0, F0);
class C18 {
    static [v17](a20, a21, a22) {
    }
}
