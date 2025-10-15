const v2 = Symbol.iterator;
const v11 = {
    [v2]() {
        let v4 = 10;
        const v10 = {
            next() {
                v4--;
                const v8 = v4 == 0;
                return { done: v8, value: v4 };
            },
        };
        return v10;
    },
};
new Int16Array(v11);
