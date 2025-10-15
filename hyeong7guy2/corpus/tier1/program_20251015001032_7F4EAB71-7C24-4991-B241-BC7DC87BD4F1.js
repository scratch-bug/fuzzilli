const v12 = {
    construct(a1, a2) {
        const v3 = [257820.71758485283,-2.6364148594607606,1.1821703597372879e+308,Infinity,-1000000.0];
        for (let i5 = 0;
            (() => {
                for (const v6 in a2) {
                    v3[v6] %= i5;
                }
                return i5 < 25000;
            })();
            ++i5) {
        }
        return a1;
    },
};
function f14() {
    return Proxy;
}
const v15 = new Proxy(f14, v12);
Reflect.construct(v15, v15);
