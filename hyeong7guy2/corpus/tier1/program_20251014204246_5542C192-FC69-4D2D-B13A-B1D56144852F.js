const v3 = Symbol.iterator;
const v12 = {
    [v3]() {
        try {
            this.p();
        } catch(e7) {
            e7.stack;
        }
        const v11 = {
            next() {
                return { done: 10 };
            },
        };
        return v11;
    },
};
const v15 = new Int16Array();
new Date(WeakSet, Date, 882, ...v15, ...v12);
