function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            let v8 = -1098098658;
            let v9 = v8 + v8;
            v9++;
            v9++;
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
            }
            let v16 = 30349n;
            ({"b":v16,"e":v8,...Int32Array} = F12);
            return eval();
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v21 = new F1();
class C22 {
    static [v21](a24, a25, a26) {
    }
}
