class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            for (let v8 = 0; v8 < 5; v8++) {
                function f9(a10, a11, a12, a13) {
                    return f6;
                }
                f9(C0, f5);
            }
            eval(a7);
        }
        f6(f6());
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v19 = new F1();
class C20 {
    static [v19](a22, a23, a24) {
    }
}
