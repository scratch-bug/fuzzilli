function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v13 = {};
            let v14 = 10;
            for (let v15 = 0; v15 < 5; v15++) {
                v14 = v15;
                const v16 = [0.041563396866501456,-500.02491748214584,Infinity];
                v16[2];
                function f18() {
                    function f19(a20) {
                        return F9;
                    }
                    return f19(v16);
                }
            }
            const v22 = new F9(a3, v13);
            let v23 = 30349n;
            ({"b":v23,"e":v7,...Int32Array} = v22);
            return eval();
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v28 = new F0();
class C29 {
    static [v28](a31, a32, a33) {
    }
}
