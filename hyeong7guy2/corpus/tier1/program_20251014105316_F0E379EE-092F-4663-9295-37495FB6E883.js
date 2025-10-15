function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            const v10 = ("2147483647")[8];
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v15 = new F11(v10, F0);
            v15.e = v15;
            new F11(a3, "2147483647");
            let v17 = 30349n;
            ({"b":v17,"e":v7,...Int32Array} = v15);
            eval();
            return a3;
        }
        f5(a3);
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v22 = new F0();
class C23 {
    static [v22](a25, a26, a27) {
    }
}
