const v2 = new Uint8ClampedArray(3335);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            v2[287] = 17;
            return a7;
        }
        f9(3335);
        f9(17);
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v13 = new F4();
class C14 {
    static [v13](a16, a17, a18) {
    }
}
