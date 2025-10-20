const v3 = new Uint32Array(21);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            function f11(a12) {
                const v14 = new Uint32Array();
                function f15() {
                    v14[2] &= 9007199254740992;
                    return f15;
                }
                v3[2] &= 9007199254740992;
                return a12;
            }
            f8.constructor = f11;
            const v16 = f8.constructor;
            v16.call(f11, f8);
            v16.call();
        }
        f9();
        f9();
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v21 = new F4(F4, 9007199254740992);
class C22 {
    static [v21](a24, a25, a26) {
    }
}
