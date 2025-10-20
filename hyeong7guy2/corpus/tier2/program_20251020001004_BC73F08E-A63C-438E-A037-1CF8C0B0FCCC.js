function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            for (let v7 = 0; v7 < 5; v7++) {
                class C8 {
                }
                try { C8.apply(v7, a3); } catch (e) {}
            }
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v10 = new F0();
v10.toString(F0, F0, v10);
class C12 {
    static [v10](a14, a15, a16) {
    }
}
