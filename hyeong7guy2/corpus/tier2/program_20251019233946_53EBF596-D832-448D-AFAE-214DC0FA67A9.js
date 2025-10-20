function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10() {
            const v12 = {
                ...Temporal,
                get f() {
                    this[a3] = F0;
                    return a9;
                },
                [F6]: "🙌🏿",
            };
            const t13 = JSON.stringify;
            t13(v12);
            for (let i18 = 0, i19 = 10; i19; i19--) {
            }
            return a3;
        }
        f10.call(F0);
    }
    new F6(a3, Temporal);
}
new F0();
