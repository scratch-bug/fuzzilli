const v4 = Symbol.iterator;
const v20 = {
    [v4]() {
        eval(Date);
        for (let i8 = 0; i8 < 100000; ++i8) {
            Math.tan();
        }
        const v19 = {
            next() {
                return { done: 10 };
            },
        };
        return v19;
    },
};
const v23 = new Int16Array();
new Date(WeakSet, Date, 882, ...v23, ...v20);
