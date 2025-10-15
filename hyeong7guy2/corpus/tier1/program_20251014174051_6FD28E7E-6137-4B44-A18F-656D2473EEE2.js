function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            let v9 = -3612;
            const v10 = v9++;
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v15 = {};
            const v16 = new F11();
            let v17 = 30349n;
            v17 === v17;
            ({"b":v17,"e":v7,...Int32Array} = v16);
            eval(v10);
        }
        f5(f5);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v23 = new F0(F0, F0);
class C24 {
    static [v23](a26, a27, a28) {
    }
}
