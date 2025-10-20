function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = ("p").codePointAt(a7);
            ~v9;
            v9 - false;
            return v9;
        }
        f6(F1);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    f5();
    Object.defineProperty(this, "toString", { get: f5 });
}
new F1();
const v15 = new F1(F1, F1);
v15.toString();
