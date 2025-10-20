const v1 = new Int16Array();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v11 = { a: 1.1 };
            try { new Int16Array(...v1, -1099417542); } catch (e) {}
            return v11.minimumSignificantDigits;
        }
        f7();
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v16 = new F2(Int16Array, v1);
class C17 {
    static [v16](a19, a20, a21) {
    }
}
