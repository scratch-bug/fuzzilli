let v0 = 2147483647;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f8() {
                return f5;
            }
            let v9 = f8 >> f8;
            v9++;
            v0 ^= v9;
            const v11 = %WasmArray();
            return v0;
        }
        f6.call();
        f6(f6);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v14 = new F1();
const t22 = v14.toString;
t22();
