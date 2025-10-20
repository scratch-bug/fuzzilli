function f0(a1, a2, a3) {
    const v6 = Symbol.iterator;
    const v24 = {
        [v6]() {
            const v23 = {
                next() {
                    for (let i = 0; i < 10; i++) {
                        function f9(a10, a11) {
                            const v12 = { ...a10 };
                            return this;
                        }
                        f9(f9, v6);
                    }
                    for (let i16 = 0, i17 = 7; i17; i17--) {
                    }
                    return a1;
                },
            };
            return v23;
        },
    };
    const v27 = new Int16Array();
    const v28 = new Date(Symbol, Date, 882, ...v27, ...v24);
    return v28;
}
const v32 = new Worker(f0, { type: "function" });
v32.getMessage();
