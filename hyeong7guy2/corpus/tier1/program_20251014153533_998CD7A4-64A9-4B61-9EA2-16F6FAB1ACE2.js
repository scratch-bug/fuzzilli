function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            v7 & -2.0;
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
            }
            let v15 = 30349n;
            ({"b":v15,"e":v7,...Int32Array} = F11);
        }
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
    f4();
}
const v18 = new F0(F0, F0);
class C19 {
    static [v18](a21, a22, a23) {
    }
}
