class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                a12--;
                a11.e = a12;
                this.__proto__ = C0;
            }
            const v14 = new F9("2147483647");
            v14.e;
            new F9(C0);
        }
        f6(f6());
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v19 = new F1(C0, F1);
class C20 {
    static [v19](a22, a23, a24) {
    }
}
