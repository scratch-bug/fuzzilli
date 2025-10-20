function f0(a1, a2, a3) {
    const v14 = {
        construct(a6, a7) {
            const v8 = [257820.71758485283,-2.6364148594607606,1.1821703597372879e+308,Infinity,-1000000.0];
            for (let v9 = 0; v9 < 5; v9++) {
                for (const v10 in this) {
                    v8[v10] %= v9;
                    eval("");
                }
            }
            return this;
        },
    };
    function f16() {
        return Proxy;
    }
    const v17 = new Proxy(f16, v14);
    return Reflect.construct(v17, Symbol);
}
new Worker(f0, { type: "function" });
gc();
