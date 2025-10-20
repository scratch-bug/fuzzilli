function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v11 = {
                p(a9, a10) {
                    super.e = a6;
                    return this;
                },
                __proto__: null,
            };
            try { v11.p(); } catch (e) {}
            return null;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v13 = new F0(F0, F0);
class C14 {
    static [v13](a16, a17, a18) {
    }
}
