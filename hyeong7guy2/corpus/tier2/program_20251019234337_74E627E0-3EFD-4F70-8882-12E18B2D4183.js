const v6 = Symbol.iterator;
const v16 = {
    [v6]() {
        with (d8) {
            try { test(BigInt64Array, 44, this, new.target); } catch (e) {}
        }
        const v15 = {
            next() {
                return { done: 10000 };
            },
        };
        return v15;
    },
};
const v18 = new Int16Array();
new Date(WeakSet, Date, -128, ...v18, ...v16);
