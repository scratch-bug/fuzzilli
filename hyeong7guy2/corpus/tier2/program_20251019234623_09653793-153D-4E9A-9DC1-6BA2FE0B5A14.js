function f1() {
    return 2969;
}
let v2 = /q\p{Nd}/svi;
v2.valueOf = f1;
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            v2-- + -0.0;
            return a7;
        }
        f9();
        f9(f1);
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v15 = new F4();
class C16 {
    static [v15](a18, a19, a20) {
    }
}
