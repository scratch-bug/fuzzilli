const v0 = [693913.4712015034,-314050.5385797281];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = -639820461 * a3;
            const v10 = v0.constructor;
            try { v10.reduce(f6, f5); } catch (e) {}
            v10(v9, F1);
        }
        f6(v0);
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v15 = new F1();
class C16 {
    static [v15](a18, a19, a20) {
    }
}
