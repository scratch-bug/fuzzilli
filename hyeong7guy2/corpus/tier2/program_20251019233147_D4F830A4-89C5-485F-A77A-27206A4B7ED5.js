const v4 = Symbol.iterator;
const v12 = {
    [v4]() {
        d8.terminate();
        const v11 = {
            next() {
                return { done: 10000 };
            },
        };
        return v11;
    },
};
const v14 = new Int16Array(Symbol);
new Date(WeakSet, Date, -128, ...v14, ...v12);
