function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = Array().forEach;
            try { v9(); } catch (e) {}
            return a3;
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v11 = new F1();
v11.toString();
class C13 {
    static [v11](a15, a16, a17) {
    }
}
