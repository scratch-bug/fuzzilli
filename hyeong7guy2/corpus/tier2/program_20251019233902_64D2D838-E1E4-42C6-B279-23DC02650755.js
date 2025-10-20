function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            a7++;
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
            }
            let v13 = 30349n;
            ({"b":v13,"e":a4,...c} = F9);
            return eval(a3);
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v18 = new F1();
class C19 {
    static [v18](a21, a22, a23) {
    }
}
