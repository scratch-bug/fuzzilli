const v2 = new Uint32Array(536870912);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            const v10 = v2[2];
            v10 >>> v10;
        }
        f8();
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v14 = new F3();
for (let i17 = 0, i18 = 10; i18; i18--) {
}
class C24 {
    static [v14](a26, a27, a28) {
    }
}
