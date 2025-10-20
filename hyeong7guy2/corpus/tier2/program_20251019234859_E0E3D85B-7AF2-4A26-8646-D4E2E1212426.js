function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v8 = typeof a7;
            try { v8.localeCompare(this); } catch (e) {}
        }
        f6(-0.0);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v11 = new F1(-0.0, -0.0);
class C12 {
    static [v11](a14, a15, a16) {
    }
}
