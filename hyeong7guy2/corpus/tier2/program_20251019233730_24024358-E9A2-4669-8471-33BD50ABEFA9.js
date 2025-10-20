const v4 = Symbol.iterator;
const v15 = {
    [v4]() {
        with (d8) {
            const t1 = test.FastCAPI;
            const v9 = new t1(test);
            v9.is_fast_c_api_object(Date);
        }
        const v14 = {
            next() {
                return { done: 10000 };
            },
        };
        return v14;
    },
};
const v17 = new Int16Array();
new Date(WeakSet, Date, -128, ...v17, ...v15);
