function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                a12++;
                this.e = a12;
            }
            const v14 = new F9(a6, f4);
            let v15 = 30349n;
            ({"b":v15,"e":v7,...Int32Array} = v14);
            const v16 = [628894504,-3,-12,9,-35728,-2147483648,-11,129];
            const v17 = {};
            const v18 = { ...v16 };
            function f19(a20) {
                eval();
                return eval;
            }
        }
        f5(f5());
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v25 = new F0(F0, F0);
class C26 {
    static [v25](a28, a29, a30) {
    }
}
