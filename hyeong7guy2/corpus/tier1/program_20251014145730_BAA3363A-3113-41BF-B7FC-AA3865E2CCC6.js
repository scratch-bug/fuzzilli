function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = [628894504,-3,-12,9,-35728,-2147483648,-11,129];
            v7.at(v7);
        }
        f5(f5);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v11 = new F0();
class C12 {
    static [v11](a14, a15, a16) {
    }
}
