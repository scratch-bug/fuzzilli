function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F8(a10, a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v14 = new F8();
            function f15() {
                return f5;
            }
            function f17(a18, a19, a20) {
                a18[Symbol.replace];
                return f17;
            }
            f17(Math);
            const v25 = f17(v14);
            v25(3);
            v25(f15);
        }
        f5(a2);
        f5(a2);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v30 = new F0(F0, F0);
class C31 {
    static [v30](a33, a34, a35) {
    }
}
