const v14 = {
    construct(a2, a3) {
        const v4 = [257820.71758485283,-2.6364148594607606,1.1821703597372879e+308,Infinity,-1000000.0];
        for (let i6 = 0;
            (() => {
                for (const v7 in this) {
                    v4[v7] %= i6;
                }
                return i6 < 25000;
            })();
            ++i6) {
            i6 << i6;
        }
        return Symbol;
    },
};
function f16() {
    return f16;
}
const v17 = new Proxy(f16, v14);
Reflect.construct(v17, Symbol);
