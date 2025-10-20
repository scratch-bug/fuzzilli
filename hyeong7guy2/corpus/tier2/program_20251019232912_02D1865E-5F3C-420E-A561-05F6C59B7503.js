const v13 = {
    construct(a3, a4) {
        for (let i6 = 0;
            (() => {
                for (const v7 in this) {
                    Map[v7] %= i6;
                }
                return i6 < 25000;
            })();
            ++i6) {
        }
        return Symbol;
    },
};
function f15() {
    return f15;
}
const v16 = new Proxy(f15, v13);
Reflect.construct(v16, Symbol);
