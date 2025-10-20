for (let i2 = 0, i3 = 10; i3; i3--) {
}
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    function f13() {
        function f14(a15) {
            const t6 = Intl.PluralRules;
            const v21 = new t6("is");
            v21.selectRange(-33134, -9007199254740990);
        }
        return f14;
    }
    Object.defineProperty(this, "toString", { get: f13 });
}
const v23 = new F9(F9, F9);
class C24 {
    static [v23](a26, a27, a28) {
    }
}
