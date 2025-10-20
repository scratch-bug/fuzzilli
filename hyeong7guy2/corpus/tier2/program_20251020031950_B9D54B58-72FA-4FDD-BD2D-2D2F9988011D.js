const v0 = /[foo(?=bar)bazlH]/dusymi;
const v3 = Symbol.iterator;
const v16 = {
    [v3]() {
        const v15 = {
            next() {
                const v7 = { done: 10 };
                const v9 = {};
                function f11() {
                    return v9;
                }
                new Proxy(f11, v9);
                v0["test"]();
                return v7;
            },
        };
        return v15;
    },
};
class C17 extends Int32Array {
}
new C17(v16);
