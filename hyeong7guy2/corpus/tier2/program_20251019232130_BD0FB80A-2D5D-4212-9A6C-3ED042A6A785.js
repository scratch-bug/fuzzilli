function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            function f9() {
                for (let v10 = 0; v10 < 5; v10++) {
                    v10 != v10;
                    for (let v12 = 0; v12 < 5; v12++) {
                    }
                    function f13(a14, a15) {
                        return v10;
                    }
                }
            }
            const v16 = f9();
            const v17 = v16 >> v16;
            const v18 = `string${f9}undefined`;
            Array(6, v17, v16);
            v18.normalize();
            return this;
        }
        f7();
        f7(Array);
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v23 = new F2();
v23.toString(Array, F2);
