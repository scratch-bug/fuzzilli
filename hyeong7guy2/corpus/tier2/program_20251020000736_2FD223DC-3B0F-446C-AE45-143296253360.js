function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            for (let v8 = 0; v8 < 5; v8++) {
                v8 << v8;
            }
            const v10 = `string${536870912n}undefined`;
            const v12 = new Int16Array();
            const v13 = v12.length;
            const v14 = { millisecond: v13 };
            return v10.charAt(v13);
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v18 = new F1(F1, 536870912n);
v18.toString(536870912n, 536870912n);
