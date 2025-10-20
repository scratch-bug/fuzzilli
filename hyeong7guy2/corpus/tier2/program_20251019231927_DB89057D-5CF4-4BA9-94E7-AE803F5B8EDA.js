let v0 = /c[\cZ]kV(?:a+)?/symi;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            v0.e = f6;
        }
        f6(a4);
        f6(f6);
        %OptimizeMaglevOnNextCall(f6);
        v0++;
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v11 = new F1(F1, v0);
class C12 {
    static [v11](a14, a15, a16) {
    }
}
