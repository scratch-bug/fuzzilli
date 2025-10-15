const v1 = Intl.Collator;
const v4 = Symbol.iterator;
const v11 = {
    [v4]() {
        v1.supportedLocalesOf();
        const v10 = {
            next() {
                return { done: 10 };
            },
        };
        return v10;
    },
};
new Int16Array(v11);
