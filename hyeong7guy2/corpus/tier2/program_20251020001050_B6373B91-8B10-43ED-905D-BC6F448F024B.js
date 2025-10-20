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
                        return a12;
                    }
                }
                return a3;
            }
            const v14 = f7();
            v14 >> v14;
            const v16 = `string${a6}undefined`;
            let v17 = {};
            ++v17;
            for (const v19 in v17) {
            }
            v16.normalize();
            return a6;
        }
        f5(a3);
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v23 = new F0();
v23.toString();
