for (let i3 = 0, i4 = 10; i4; i4--) {
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    function f14() {
        function f15(a16) {
            const t6 = Intl.PluralRules;
            const v20 = new t6();
            return v20.selectRange(1000.0, 29.159791295243167);
        }
        return f15;
    }
    Object.defineProperty(this, "toString", { get: f14 });
}
const v22 = new F10(29.159791295243167, F10);
v22.toString();
