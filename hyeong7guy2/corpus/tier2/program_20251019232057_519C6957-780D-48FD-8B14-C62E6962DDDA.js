function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7() {
                if (!new.target) { throw 'must be called with new'; }
            }
            class C9 {
                valueOf(a11, a12, a13) {
                    super[a11] = a13;
                }
            }
            let v14;
            try { v14 = new C9(F7, ...F7); } catch (e) {}
            return v14;
        }
        f5(a3);
        f5(this);
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
