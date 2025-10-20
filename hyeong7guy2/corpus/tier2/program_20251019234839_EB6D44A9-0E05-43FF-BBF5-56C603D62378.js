function f1(a2) {
    const v3 = [f1];
    let v4;
    try { v4 = v3.findLastIndex(-4294967296n); } catch (e) {}
    return v4;
}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11) {
            a8[4] | 7;
            const v15 = new f1(f10);
            v15[1];
        }
        f10();
        f10(f10);
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v19 = new F5(f1, f1);
class C20 {
    static [v19](a22, a23, a24) {
    }
}
