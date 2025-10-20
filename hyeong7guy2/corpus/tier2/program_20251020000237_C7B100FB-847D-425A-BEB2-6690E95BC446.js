let v1 = 2.2250738585072014e-308;
const v2 = v1++;
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            Array(v1, Int32Array);
        }
        f8();
        f8(v2);
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v14 = new F3();
class C15 {
    static [v14](a17, a18, a19) {
    }
}
