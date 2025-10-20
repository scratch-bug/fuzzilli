function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
            }
            ({"b":a3,"e":v7,...Int32Array} = F9);
            return a3;
        }
        f5(this);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v15 = new F0();
class C16 {
    static [v15](a18, a19, a20) {
    }
}
