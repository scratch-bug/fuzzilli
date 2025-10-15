const v2 = new Uint32Array(536870912);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            v2[2];
            function f11() {
                return f11;
            }
            return a9;
        }
        f8(f8);
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v14 = new F3(536870912, v2);
class C15 {
    static [v14](a17, a18, a19) {
    }
}
