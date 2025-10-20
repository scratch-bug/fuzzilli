function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v8 = `string${536870912n}undefined`;
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
            }
            for (let v13 = 0; v13 < 5; v13++) {
                F9.d >>>= 100000;
            }
            v8.normalize();
            return a3;
        }
        const v16 = f6(F1);
        f6.call(v16, a4, v16, v16);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v18 = new F1(F1, 536870912n);
v18.toString();
