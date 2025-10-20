function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7() {
                for (let v8 = 0; v8 < 5; v8++) {
                    v8 != v8;
                    for (let v10 = 0; v10 < 5; v10++) {
                    }
                    function f11(a12, a13) {
                        return f4;
                    }
                }
            }
            const v14 = f7();
            v14 >> v14;
            const v16 = `string${a6}undefined`;
            function f17(a18, a19, a20) {
                function F21(a23, a24, a25, a26) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                const v27 = new F21();
                function f28() {
                    return f28;
                }
                v27.constructor = f28;
                return f5;
            }
            f17();
            v16.normalize();
            return f5;
        }
        f5(f5);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v33 = new F0(F0, F0);
v33.toString(F0);
