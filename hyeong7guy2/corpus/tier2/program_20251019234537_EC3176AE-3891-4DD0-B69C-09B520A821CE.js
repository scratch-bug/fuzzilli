const v1 = Intl.Collator;
const v4 = Symbol.iterator;
const v12 = {
    [v4]() {
        class C7 extends v1 {
        }
        new C7();
        const v11 = {
            next() {
                return { done: 10 };
            },
        };
        return v11;
    },
};
new Int16Array(v12);
