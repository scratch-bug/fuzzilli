function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new Int8Array();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    let v6 = this;
    function f9() {
        function f10(a11) {
            ({"buffer":v6,"byteLength":F0,"length":a8,} = v4);
        }
        f10();
        f10();
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(v6, "toString", { get: f9 });
}
F5.length;
const v15 = new F5();
class C16 {
    static [v15](a18, a19, a20) {
    }
}
