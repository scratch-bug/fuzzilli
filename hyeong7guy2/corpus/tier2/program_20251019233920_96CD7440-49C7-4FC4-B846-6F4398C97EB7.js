function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const t4 = Intl.DateTimeFormat;
            t4("fa").formatToParts(-1000000000000.0);
        }
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v13 = new F1(F1, F1);
class C14 {
    static [v13](a16, a17, a18) {
    }
}
