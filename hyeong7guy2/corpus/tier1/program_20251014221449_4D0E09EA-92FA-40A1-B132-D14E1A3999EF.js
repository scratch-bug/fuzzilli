const v2 = new Uint32Array(7);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            const v10 = {};
            const v11 = v2[2];
            function f12(a13, a14, a15) {
                return eval(v11);
            }
            return a5;
        }
        f8(this);
        f8(f7);
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v20 = new F3();
class C21 {
    static [v20](a23, a24, a25) {
    }
}
