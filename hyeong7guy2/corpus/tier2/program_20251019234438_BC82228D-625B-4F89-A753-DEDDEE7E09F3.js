const v3 = Symbol.iterator;
const v13 = {
    [v3]() {
        globalThis[Symbol.toPrimitive] = Date;
        const t1 = globalThis.encodeURI;
        t1(globalThis);
        const v12 = {
            next() {
                return { done: 10 };
            },
        };
        return v12;
    },
};
const v16 = new Int16Array();
new Date(WeakSet, Date, 882, ...v16, ...v13);
