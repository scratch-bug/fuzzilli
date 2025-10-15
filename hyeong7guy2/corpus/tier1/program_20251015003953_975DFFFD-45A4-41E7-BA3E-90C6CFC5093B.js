class C0 {
}
const v14 = {
    construct(a2, a3) {
        const v4 = [257820.71758485283,-2.6364148594607606,1.1821703597372879e+308,Infinity,-1000000.0];
        C0[0];
        for (let i7 = 0;
            (() => {
                for (const v8 in a3) {
                    v4[v8] %= i7;
                }
                return i7 < 25000;
            })();
            ++i7) {
        }
        return a2;
    },
};
function f16() {
}
const v17 = new Proxy(f16, v14);
Reflect.construct(v17, v17);
