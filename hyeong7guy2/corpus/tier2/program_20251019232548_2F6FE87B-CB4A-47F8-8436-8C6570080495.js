function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10() {
            const v12 = {
                type: "🙌🏿",
                [Symbol]() {
                },
            };
            const t10 = JSON.stringify;
            t10(v12);
            for (let i18 = 0, i19 = 10; i19; i19--) {
            }
            function f25(a26) {
                return a26;
            }
            return f25;
        }
        Object.defineProperty(this, "toString", { get: f10 });
    }
    const v27 = new F6("🙌🏿", a4);
    class C28 {
        static [v27](a30, a31, a32) {
        }
    }
}
new F2();
