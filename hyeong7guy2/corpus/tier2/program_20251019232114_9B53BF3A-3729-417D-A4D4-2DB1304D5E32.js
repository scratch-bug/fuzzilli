function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9() {
            const v11 = {
                type: "🙌🏿",
                [f9]() {
                },
            };
            const t10 = JSON.stringify;
            t10(v11);
            for (let i17 = 0, i18 = 10; i18; i18--) {
            }
            function f24(a25) {
            }
            return f24;
        }
        Object.defineProperty(this, "toString", { get: f9 });
    }
    const v26 = new F5();
    class C27 {
        static [v26](a29, a30, a31) {
        }
    }
}
new F1();
new F1();
