function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            Math.sinh(a7);
            a7 >> 9;
            const v12 = `string${536870912n}undefined`;
            for (let v16 = 0; v16 < 5; v16++) {
                Date.now(9, v16, v16, ..."formatToParts");
            }
            return v12.replace(a3, "formatToParts");
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v19 = new F1();
v19.toString(v19);
