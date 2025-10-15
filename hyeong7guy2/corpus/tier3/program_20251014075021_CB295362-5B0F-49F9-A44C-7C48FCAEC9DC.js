function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6) {
        const v17 = {
            [Symbol]() {
                const v16 = {
                    next() {
                        async function* f10(a11, a12, a13) {
                            const v14 = [];
                            yield* v14;
                            return v14;
                        }
                        f10();
                    },
                };
            },
        };
    }
    new Worker(f4, { type: "function" });
}
new F0();
new F0();
