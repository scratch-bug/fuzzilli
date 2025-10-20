function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7(a8, a9, a10) {
                const v14 = BigInt.asUintN(43036, -229684853n);
                return v14 >= v14;
            }
            %OptimizeFunctionOnNextCall(f7);
            f7(f4, f4, f5);
        }
        f5(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v18 = new F0();
class C19 {
    static [v18](a21, a22, a23) {
    }
}
