function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = [a6];
            const v8 = v7[4];
            function F10() {
                if (!new.target) { throw 'must be called with new'; }
            }
            class C12 {
            }
            let v13;
            try { v13 = new C12(F10, ...F10); } catch (e) {}
            v7 ?? v13;
            v8 | 7;
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v18 = new F0();
class C19 {
    static [v18](a21, a22, a23) {
    }
}
