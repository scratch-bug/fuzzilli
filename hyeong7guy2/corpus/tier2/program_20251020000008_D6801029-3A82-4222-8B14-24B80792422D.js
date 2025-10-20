const v1 = ("🙌🏿").fontsize("🙌🏿");
const v3 = v1.replaceAll(v1[14]);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            const v12 = Intl.Locale;
            try { new v12(v3); } catch (e) {}
        }
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v14 = new F4("🙌🏿", "🙌🏿");
class C15 {
    static [v14](a17, a18, a19) {
    }
}
