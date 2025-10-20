function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            let v9 = -1098098658;
            let v10 = v9 + v9;
            v10++;
            for (let v12 = 0; v12 < 500; v12++) {
                v12 < 20000;
            }
            v10++;
            function F18(a20, a21) {
                if (!new.target) { throw 'must be called with new'; }
            }
            let v23 = 30349n;
            ({"b":v23,"e":v9,...c} = F18);
            eval();
        }
        f7();
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v28 = new F2();
class C29 {
    static [v28](a31, a32, a33) {
        for (let i35 = 0; i35 < 25000;) {
        }
    }
}
