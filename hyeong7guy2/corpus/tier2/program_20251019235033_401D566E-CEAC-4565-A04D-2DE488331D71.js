class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                this.__proto__ = C0;
            }
            const v12 = new F8();
            try { v12.apply(F1); } catch (e) {}
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v16 = new F1(C0, C0);
class C17 {
    static [v16](a19, a20, a21) {
    }
}
