function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f8() {
                for (let v9 = 0; v9 < 5; v9++) {
                    function f10(a11) {
                        return v9;
                    }
                    function F12(a14, a15) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                }
                for (let v16 = 0; v16 < 5; v16++) {
                }
            }
            const v17 = f8();
            v17 >> v17;
            const v19 = `string${536870912n}undefined`;
            const v21 = new Uint8Array();
            function f22() {
                return F1;
            }
            function f23(a24) {
                return 536870912n;
            }
            Object.defineProperty(v21, Symbol, { enumerable: true, get: f22, set: f23 });
            v21[31] = v21;
            v19.normalize();
            return f6;
        }
        f6.call(f6);
        f6(f6);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v29 = new F1();
v29.toString();
