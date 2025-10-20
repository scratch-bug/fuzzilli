function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = f5[16];
            v7 >>> v7;
            const v10 = { c: 1.1 };
            -9223372036854775807n < -9223372036854775807n;
            v7 - v10;
        }
        f5(f5.apply());
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v16 = new F0(F0, F0);
class C17 {
    static [v16](a19, a20, a21) {
    }
}
