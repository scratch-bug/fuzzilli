function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9() {
            const v10 = { type: "🙌🏿" };
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                function f16() {
                    return f16;
                }
                Object.defineProperty(v10, "toString", { get: f16 });
            }
            new F12();
            const t14 = JSON.stringify;
            t14(v10);
            for (let i22 = 0, i23 = 10; i23; i23--) {
            }
            function f29(a30) {
                return a30;
            }
            return f29;
        }
        Object.defineProperty(this, "toString", { get: f9 });
    }
    const v31 = new F5();
    class C32 {
        static [v31](a34, a35, a36) {
        }
    }
}
new F1();
