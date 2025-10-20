function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            const t5 = ("2147483647").constructor;
            const v11 = new t5(a6);
            v11.codePointAt("2147483647");
            let v13 = 30349n;
            ({"b":v13,"e":v7,...Int32Array} = "2147483647");
            return eval();
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
