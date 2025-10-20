function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10() {
            const v11 = { type: "🙌🏿", done: false };
            const t6 = JSON.stringify;
            t6(v11);
            for (let i17 = 0, i18 = 10; i18; i18--) {
            }
            function f24(a25) {
                return a25;
            }
            return f24;
        }
        Object.defineProperty(this, "toString", { get: f10 });
    }
    const v26 = new F6(F2, a5);
    class C27 {
        static [v26](a29, a30, a31) {
        }
    }
}
new F2(F2, F2);
