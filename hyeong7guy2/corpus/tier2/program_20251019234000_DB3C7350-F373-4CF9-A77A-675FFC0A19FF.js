let v0 = 129;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            function f9() {
                return f7;
            }
            const v10 = f9 >> f9;
            const v11 = `string${536870912n}undefined`;
            v0 ^= v10;
            const v13 = { __proto__: null };
            v11.normalize();
            return a5;
        }
        f7.call();
        f7(v0);
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v17 = new F2();
const v18 = v17.toString;
v18(v17, v17, v18, 536870912n);
