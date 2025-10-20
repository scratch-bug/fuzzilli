let v1 = [];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            v1++;
            let v10 = -1098098658;
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
            }
            this[4] | 7;
            let v18 = arguments;
            ({"b":v18,"e":v10,...Int32Array} = F11);
        }
        f7(f7);
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v21 = new F2();
class C22 {
    static [v21](a24, a25, a26) {
    }
}
