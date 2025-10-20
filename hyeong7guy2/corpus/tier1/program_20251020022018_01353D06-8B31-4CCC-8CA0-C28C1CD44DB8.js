function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            for (let v8 = 0; v8 < 5; v8++) {
                v8 << v8;
            }
            const v10 = `string${536870912n}undefined`;
            const v11 = [-9223372036854775808];
            v11.pop();
            v10.charAt();
            return v11;
        }
        f6(f6);
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v16 = new F1();
v16.toString();
