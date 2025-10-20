function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = Symbol.iterator;
const v15 = {
    [v9]() {
        const v11 = { 4294967296: F1 };
        const v14 = {
            next() {
                return { done: Uint16Array };
            },
        };
        return v14;
    },
};
const v17 = new Int16Array(v15, -128, -128);
new Date(WeakSet, Date, -128, ...v17, ...v15);
