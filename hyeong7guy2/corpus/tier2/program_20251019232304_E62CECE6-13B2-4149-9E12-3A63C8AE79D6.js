function f0(a1, a2, a3) {
    const v11 = {
        construct(a6, a7) {
            const v8 = [257820.71758485283,-2.6364148594607606,1.1821703597372879e+308,Infinity,-1000000.0];
            for (let v9 = 0; v9 < 10; v9++) {
                for (const v10 in this) {
                    v8[v10] %= v9;
                }
            }
            return a3;
        },
    };
    function f13() {
        return f0;
    }
    const v14 = new Proxy(f13, v11);
    return Reflect.construct(v14, Symbol);
}
const v20 = new Worker(f0, { type: "function" });
v20.getMessage("function", v20, v20, f0, f0);
