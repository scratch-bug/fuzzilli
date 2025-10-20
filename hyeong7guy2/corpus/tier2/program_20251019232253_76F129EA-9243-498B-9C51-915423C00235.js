function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = new Array(223);
            function F10(a12, a13, a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                v9[3] /= 223;
            }
            new F10(F10, a3, 223, Array);
            return a4;
        }
        f6();
        f6();
        %OptimizeFunctionOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v19 = new F1();
class C20 {
    static [v19](a22, a23, a24) {
    }
}
