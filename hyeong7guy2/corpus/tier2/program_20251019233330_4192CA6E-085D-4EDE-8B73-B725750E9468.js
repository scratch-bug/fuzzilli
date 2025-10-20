function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            Math.atan2(0.5617090527603867);
        }
        f6(0.5617090527603867);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
    f5();
}
const v12 = new F1();
class C13 {
    static [v12](a15, a16, a17) {
    }
}
