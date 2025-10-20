function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
            }
            let v13 = 30349n;
            if (v13) {
            }
            ({"b":v13,"e":v7,...Int32Array} = F9);
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v14 = new F0();
class C15 {
    static [v14](a17, a18, a19) {
    }
    static [v14](a21, a22, a23) {
    }
}
