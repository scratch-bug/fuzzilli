const v2 = new BigInt64Array(64, 64, 64);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            v2.length >>>= 64;
        }
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v11 = new F3(v2, 64);
v11.toString;
class C13 {
    static [v11](a15, a16, a17) {
    }
}
