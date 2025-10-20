class C1 {
    static valueOf(a3, a4) {
        return -1000000.0;
    }
}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11) {
            const v13 = new Date();
            v13.setMinutes(f9, v13, C1);
        }
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v15 = new F5();
class C16 {
    static [v15](a18, a19, a20) {
    }
}
