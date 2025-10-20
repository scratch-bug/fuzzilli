function f0(a1, a2, a3) {
    const v6 = Symbol.iterator;
    const v11 = {
        [v6]() {
            const v10 = {
                next() {
                    Uint8Array.__proto__ = this;
                    return a1;
                },
            };
            return v10;
        },
    };
    const v14 = new Int16Array(882, a3, a1);
    new Date(Symbol, Date, 882, ...v14, ...v11);
    return v6;
}
const v18 = { type: "function" };
const v19 = new Worker(f0, v18);
v19.getMessage("function", v18, v18, v18, v18);
