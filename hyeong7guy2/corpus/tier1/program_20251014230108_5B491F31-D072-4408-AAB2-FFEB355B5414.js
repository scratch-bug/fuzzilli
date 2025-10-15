function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            Object.entries(this);
        }
        f5(F0);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v10 = new F0();
class C11 {
    static [v10](a13, a14, a15) {
    }
}
