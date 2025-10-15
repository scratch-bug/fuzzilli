function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v10 = ([a6,a6,a6,a6,a6])[4] | 7;
            Array(1048576);
            function f14(a15, a16, a17) {
                return f14;
            }
            return v10;
        }
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
    f4();
}
const v20 = new F0();
class C21 {
    static [v20](a23, a24, a25) {
    }
}
