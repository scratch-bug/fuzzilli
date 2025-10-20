function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = [-31063,25190,3,-65537,-2,-268435456,6,4,-60075];
            function f9(a10) {
                return f9;
            }
            v8[Symbol.toPrimitive] = f9;
            const v12 = [-2147483649,-15,-30543,536870887,64];
            function f13(a14) {
                Object.defineProperty(v12, "length", { writable: true, enumerable: true, value: v8 });
                return a14;
            }
            return a2;
        }
        f5();
        f5(f5);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v17 = new F0();
class C18 {
    static [v17](a20, a21, a22) {
    }
}
