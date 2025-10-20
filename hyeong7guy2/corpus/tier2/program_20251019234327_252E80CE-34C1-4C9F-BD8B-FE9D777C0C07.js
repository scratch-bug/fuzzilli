function f0(a1, a2, a3) {
    const v6 = Symbol.iterator;
    const v15 = {
        [v6]() {
            const v14 = {
                next() {
                    class C9 {
                    }
                    for (let v10 = 0; v10 < 25; v10++) {
                        typeof C9 === "number";
                    }
                    return a2;
                },
            };
            return v14;
        },
    };
    const v18 = new Int16Array();
    new Date(Symbol, Date, 882, ...v18, ...v15);
    return a2;
}
const v23 = new Worker(f0, { type: "function" });
v23.getMessage();
