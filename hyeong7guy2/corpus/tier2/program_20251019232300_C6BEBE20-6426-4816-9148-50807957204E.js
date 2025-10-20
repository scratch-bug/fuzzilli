function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            function f10() {
                for (let v11 = 0; v11 < 5; v11++) {
                    function f12(a13, a14) {
                    }
                    try { f12(f12, -2.0); } catch (e) {}
                }
            }
            const v16 = f10();
            const v17 = v16 >> v16;
            const v18 = `string${f10}undefined`;
            Array(6, v17, v16)[1];
            v18.normalize();
        }
        f8();
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v24 = new F3();
v24.toString();
