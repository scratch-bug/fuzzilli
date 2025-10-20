function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v8 = [];
            v8[11] = Infinity;
            const v9 = v8[4];
            try { v9.replaceAll(); } catch (e) {}
            v9 ?? a3;
        }
        f6.call();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    f5.apply();
    Object.defineProperty(this, "toString", { get: f5 });
}
const v14 = new F1();
class C15 {
    static [v14](a17, a18, a19) {
    }
}
