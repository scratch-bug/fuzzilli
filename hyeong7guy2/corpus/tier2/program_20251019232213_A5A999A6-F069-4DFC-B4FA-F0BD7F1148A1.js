function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            Math.sinh(a7);
            a7 >> 9;
            const v12 = `string${536870912n}undefined`;
            f6 **= f6;
            v12.replace(v12, v12);
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v14 = new F1();
v14.toString(v14);
