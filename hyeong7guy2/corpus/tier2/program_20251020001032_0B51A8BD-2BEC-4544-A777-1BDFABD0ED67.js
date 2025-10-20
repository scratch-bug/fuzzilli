const v0 = [];
function f1(a2) {
    /i/dgmi;
    return v0;
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            const v11 = f9[4];
            v0.forEach(f1);
            v11 | 7;
            return 7;
        }
        f9.call();
        f9(F4);
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v17 = new F4();
class C18 {
    static [v17](a20, a21, a22) {
    }
}
