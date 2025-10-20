const v1 = Symbol.iterator;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            try { Math.expm1(v1); } catch (e) {}
            Math.clz32(1643385767);
        }
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v13 = new F2();
v13.toString(v1, v13, v1, Symbol, v13);
class C15 {
    static [v13](a17, a18, a19) {
    }
}
