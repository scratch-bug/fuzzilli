const v0 = /[foo(?=bar)bazlH]/dusymi;
const v3 = Symbol.iterator;
const v14 = {
    [v3]() {
        let v5 = 10;
        const v13 = {
            next() {
                v5--;
                const v9 = v5 == 0;
                const v10 = { done: v9 };
                v0["test"](v9);
                return v10;
            },
        };
        return v13;
    },
};
class C15 extends Int32Array {
}
new C15(v14);
