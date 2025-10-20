function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            const v9 = new F0();
            const t6 = v9.constructor;
            new t6();
            let v12 = 30349n;
            v12 !== v12;
            ({"b":v12,"e":v7,...Int32Array} = v9);
            eval(a6);
        }
        f5();
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v18 = new F0(F0, F0);
class C19 {
    static [v18](a21, a22, a23) {
    }
}
