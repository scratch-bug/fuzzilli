const v2 = Symbol.iterator;
const v12 = {
    [v2]() {
        let v4 = 10;
        const v11 = {
            next() {
                v4--;
                const v8 = v4 == 0;
                const v9 = { done: v8 };
                try { v9(); } catch (e) {}
                return v9;
            },
        };
        return v11;
    },
};
Array.fromAsync(v12);
