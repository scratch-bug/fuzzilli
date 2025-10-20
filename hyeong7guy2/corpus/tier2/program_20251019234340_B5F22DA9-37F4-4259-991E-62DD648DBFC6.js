const v0 = [-536870912,-9007199254740991,16549];
class C1 {
}
function f3() {
    C1 ^= -2147483647;
    const t4 = [1000.0];
    t4[15] |= 256;
    return 256;
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        function f11(a12) {
            function F13(a15, a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F13.constructor = f3;
            const t17 = F13.constructor;
            t17(v0);
            return a8;
        }
        f11();
        f11();
        %OptimizeMaglevOnNextCall(f11);
        return f11;
    }
    Object.defineProperty(this, "toString", { get: f10 });
}
const v22 = new F6(-2147483647, C1);
class C23 {
    static [v22](a25, a26, a27) {
    }
}
