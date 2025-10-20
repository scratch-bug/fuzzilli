function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f9(a10, a11) {
            function f12(a13, a14) {
                a14.bind(a10, a3, f4, a13, f9);
                return Symbol;
            }
            return f12;
        }
        Symbol.toString = f9;
        536870912n >> 536870912n;
        function F18(a20, a21) {
            if (!new.target) { throw 'must be called with new'; }
            function f22() {
                function f23(a24) {
                    const v25 = Symbol.toString(a24);
                    v25(v25, f4);
                    return f23;
                }
                f23(a21);
                return f23;
            }
            Object.defineProperty(this, "toString", { get: f22 });
        }
        const v28 = new F18();
        v28.toString();
        return F0;
    }
    f4(F0, f4, a2);
    %OptimizeFunctionOnNextCall(f4);
}
const v31 = new F0();
const v32 = v31.constructor;
new v32();
new F0(F0, v32);
