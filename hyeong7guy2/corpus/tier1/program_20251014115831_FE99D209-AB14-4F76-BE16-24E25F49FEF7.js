function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                Object["2147483647"] &= 2782;
            }
            new F9(F9, F1);
            new F9(a3, a7);
        }
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v16 = new F1(2782, F1);
class C17 {
    static [v16](a19, a20, a21) {
    }
    [v16] = v16;
}
