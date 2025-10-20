function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    [,Symbol] = "symbol";
}
new F2(F2, F2, Symbol);
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    function f12() {
        function f13(a14) {
            const v16 = f13 < {};
            v16 !== a10;
            return v16;
        }
        f13();
        f13(this);
        %OptimizeMaglevOnNextCall(f13);
        return f13;
    }
    Object.defineProperty(this, "toString", { get: f12 });
}
const v20 = new F8(Symbol);
class C21 {
    static [v20](a23, a24, a25) {
    }
}
