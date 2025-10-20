const v3 = new Uint32Array(21);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            function f11(a12) {
                v3[2] &= 9007199254740992;
                return a12;
            }
            f8.constructor = f11;
            const v13 = f8.constructor;
            v13.call(a10, Uint32Array, a7, v3, a7);
            return v13.call();
        }
        f9(f9);
        f9(v3);
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v18 = new F4();
class C19 {
    static [v18](a21, a22, a23) {
    }
}
