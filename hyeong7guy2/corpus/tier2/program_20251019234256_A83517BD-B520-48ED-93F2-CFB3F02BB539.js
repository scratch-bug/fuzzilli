function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    let v6 = this;
    function f9() {
        function f10(a11) {
            v6.__proto__ = a11;
            [,v6,F1] = "-19650";
            return f10;
        }
        f10(f10());
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(v6, "toString", { get: f9 });
}
const v14 = new F5();
v14.toString(F5, v14, v14, F1, "-19650");
