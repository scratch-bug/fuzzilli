const v0 = [];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v8 = {};
            const v10 = new Proxy(v0, v8);
            try { v10.forEach(v8); } catch (e) {}
        }
        f6();
        f6(f6);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v14 = new F1(v0, F1);
class C15 {
    static [v14](a17, a18, a19) {
    }
}
