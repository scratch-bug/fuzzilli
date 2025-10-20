function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
class C5 extends Float64Array {
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    function f11() {
        function f12(a13) {
            function f14() {
                ("p").link(a9, "p", f14);
                for (let v17 = 0; v17 < 5; v17++) {
                    function f18(a19, a20) {
                        return f14;
                    }
                }
                return a9;
            }
            const v21 = f14();
            v21 >> v21;
            const v23 = `string${536870912n}undefined`;
            try { new F1(C5, f12, ...this, f12); } catch (e) {}
            v23.normalize();
            return f11;
        }
        f12.call(f12);
        f12();
        %OptimizeMaglevOnNextCall(f12);
        return f12;
    }
    Object.defineProperty(this, "toString", { get: f11 });
}
const v28 = new F7();
v28.toString(v28, v28);
