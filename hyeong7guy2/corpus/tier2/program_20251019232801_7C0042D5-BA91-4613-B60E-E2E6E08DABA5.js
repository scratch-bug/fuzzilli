for (let v0 = 0; v0 < 100; v0++) {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            new Float64Array(536870912);
        }
        f6(a3);
        f6(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v13 = new F1(F1, F1);
class C14 {
    static [v13](a16, a17, a18) {
    }
    static [v13](a20, a21, a22) {
    }
}
