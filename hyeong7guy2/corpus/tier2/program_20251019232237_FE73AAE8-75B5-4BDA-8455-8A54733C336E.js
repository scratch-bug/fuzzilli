function f0(a1, a2, a3) {
    const v6 = Symbol.iterator;
    const v12 = {
        [v6]() {
            const v11 = {
                next() {
                    const v9 = [16,1,-1250900055,5,-16,-1024,18740];
                    function f10() {
                        return this;
                    }
                    v9[v6] = f10;
                },
            };
            return v11;
        },
    };
    const v15 = new Int16Array();
    const v16 = new Date(Symbol, Date, 882, ...v15, ...v12);
    return v16;
}
const v20 = new Worker(f0, { type: "function" });
v20.getMessage();
