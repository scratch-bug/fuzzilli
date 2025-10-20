const v3 = Symbol.iterator;
const v14 = {
    [v3]() {
        const v13 = {
            next() {
                const v7 = { done: 10 };
                with (d8) {
                    const t2 = test.FastCAPI;
                    const v11 = new t2();
                    try { v11.enforce_range_compare_i32(-4294967297); } catch (e) {}
                }
                return v7;
            },
        };
        return v13;
    },
};
new Int16Array(v14);
