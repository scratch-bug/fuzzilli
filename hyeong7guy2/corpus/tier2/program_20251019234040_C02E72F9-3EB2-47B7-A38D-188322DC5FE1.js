function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f9() {
                return a6;
            }
            function f10() {
                Date.setMonth(F0, f10);
                return F0;
            }
            f9[Symbol.toPrimitive] = f10;
            for (const v15 in [0]) {
                let v16;
                try { v16 = (0).propertyIsEnumerable(f9); } catch (e) {}
                v16 && v16;
            }
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v20 = new F0(F0, F0);
class C21 {
    static [v20](a23, a24, a25) {
    }
}
