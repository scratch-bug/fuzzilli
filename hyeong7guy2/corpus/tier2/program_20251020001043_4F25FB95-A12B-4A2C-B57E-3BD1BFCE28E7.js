class C0 {
}
C0[0] = C0;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            function f9() {
                ("p").link(a4, "p", f9);
                for (let v12 = 0; v12 < 5; v12++) {
                    function f13(a14, a15) {
                        return 536870912n;
                    }
                }
            }
            const v16 = f9();
            const v17 = v16 >> v16;
            const v18 = `string${536870912n}undefined`;
            C0[0];
            v18.normalize();
            return v17;
        }
        f7(f6);
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v23 = new F2();
v23.toString();
