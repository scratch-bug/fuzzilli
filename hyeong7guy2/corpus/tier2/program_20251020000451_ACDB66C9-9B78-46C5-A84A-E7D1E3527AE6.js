const v2 = new Uint32Array(1315159566);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            for (let v10 = 0; v10 < 5; v10++) {
                v2[v10] = v10;
            }
            return 1315159566;
        }
        f8(f7);
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v13 = new F3(1315159566, v2);
class C14 {
    static [v13](a16, a17, a18) {
    }
}
