const v2 = new Uint32Array(536870912);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            return v2[2];
        }
        f8(a6);
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v13 = new F3();
for (let i16 = 0, i17 = 10; i17; i17--) {
}
class C23 {
    static [v13](a25, a26, a27) {
    }
}
