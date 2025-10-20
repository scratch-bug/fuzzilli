function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            function f12() {
                const v18 = {
                    [a10](a14, a15, a16, a17) {
                    },
                };
                const t11 = JSON.stringify;
                t11(v18);
                for (let i24 = 0, i25 = 10; i25; i25--) {
                }
                function f31(a32) {
                }
                return f31;
            }
            Object.defineProperty(this, "toString", { get: f12 });
        }
        const v33 = new F8(F8);
        class C34 {
            static [v33](a36, a37, a38) {
            }
        }
    }
    new F4(F4, a2);
}
new F0(F0, F0);
