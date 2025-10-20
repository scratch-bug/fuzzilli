let v0 = 2147483647;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            function f9() {
                return a8;
            }
            const v10 = f9 >> f9;
            const v11 = `string${536870912n}undefined`;
            v0 ^= v10;
            v11.normalize();
            return v0;
        }
        f7.call();
        f7(a5);
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v15 = new F2();
const t22 = v15.toString;
t22();
