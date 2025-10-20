const v0 = /[foo(?=bar)bazlH]/dusymi;
const v3 = Symbol.iterator;
const v12 = {
    [v3]() {
        const v11 = {
            next() {
                const v8 = { done: 10 };
                v0["test"]();
                return v8;
            },
        };
        return v11;
    },
};
class C13 extends Int32Array {
}
new C13(v12);
