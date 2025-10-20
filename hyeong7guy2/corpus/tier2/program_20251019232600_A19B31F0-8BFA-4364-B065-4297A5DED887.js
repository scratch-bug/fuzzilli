for (let i2 = 0, i3 = 10; i3; i3--) {
}
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    function f13() {
        function f14(a15) {
            function f16(a17, a18, a19) {
                const v23 = BigInt.asUintN(43036, -229684853n);
                let v24 = v23 + v23;
                return v24--;
            }
            %OptimizeFunctionOnNextCall(f16);
            f16();
            return a11;
        }
        f14();
        return f14;
    }
    Object.defineProperty(this, "toString", { get: f13 });
}
const v28 = new F9();
class C29 {
    static [v28](a31, a32, a33) {
    }
}
