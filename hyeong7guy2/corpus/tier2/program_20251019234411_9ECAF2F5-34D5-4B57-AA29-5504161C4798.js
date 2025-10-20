function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f8() {
                for (let v9 = 0; v9 < 5; v9++) {
                    function f10(a11) {
                        return 536870912n;
                    }
                    function F12(a14, a15) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                }
                for (let v16 = 0; v16 < 5; v16++) {
                }
            }
            const v17 = f8();
            const v18 = v17 >> v17;
            const v19 = `string${536870912n}undefined`;
            const v21 = new SharedArrayBuffer();
            const v23 = new DataView(v21);
            try { v23.getInt32(v18); } catch (e) {}
            v19.normalize();
            return f5;
        }
        f6.call(f6, f6);
        f6(this);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v28 = new F1(F1, F1);
v28.toString();
