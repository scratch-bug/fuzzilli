function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            function F13(a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
                a16--;
                this.e = a16;
            }
            const v18 = new F13("2147483647", -3612);
            const v19 = v18.e;
            new F13(v19 - v19, F13);
            function f22(a23, a24) {
                a23 + a23;
                return this;
            }
            f22(F0);
            return a6;
        }
        f9();
        f9();
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v29 = new F4();
class C30 {
    static [v29](a32, a33, a34) {
    }
}
