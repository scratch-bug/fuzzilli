function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f8(a9, a10, a11) {
                class C13 extends Float64Array {
                    static {
                        function f15(a16) {
                            return Symbol;
                        }
                        this[Symbol.toPrimitive] = f15;
                    }
                }
                return a11;
            }
            f8(this, f5, f6);
            f8();
            %OptimizeFunctionOnNextCall(f8);
            f8(f6, a7, a7);
            return a3;
        }
        f6();
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v22 = new F1();
class C23 {
    static [v22](a25, a26, a27) {
    }
}
