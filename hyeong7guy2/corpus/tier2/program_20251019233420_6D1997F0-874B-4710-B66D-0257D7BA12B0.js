function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            let v8 = -1098098658;
            let v9 = v8 + v8;
            v9--;
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
            }
            let v15 = 30349n;
            ({"b":v15,"e":v8,...Int32Array} = F11);
            return eval(v15);
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v20 = new F1();
class C21 {
    static [v20](a23, a24, a25) {
    }
}
