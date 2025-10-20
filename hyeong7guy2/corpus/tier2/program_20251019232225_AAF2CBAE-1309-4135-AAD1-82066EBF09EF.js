let v0 = /q\p{Nd}/svi;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v9 = v0--;
            v9 + -0.0;
            return v9;
        }
        f7();
        f7(this);
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v13 = new F2();
class C14 {
    static [v13](a16, a17, a18) {
    }
}
