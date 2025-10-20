function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F8(a10, a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v14 = new F8();
            function f15() {
                return 7;
            }
            f15.bind();
            Math.log2(f15);
            function f19(a20, a21, a22) {
                a20[Symbol.replace];
                return f19;
            }
            f19(Math);
            const v27 = f19(v14);
            v27(7);
            v27(f15);
        }
        f5(f5);
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v32 = new F0(F0, F0);
class C33 {
    static [v32](a35, a36, a37) {
    }
}
