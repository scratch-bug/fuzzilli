const v5 = Symbol.iterator;
const v16 = {
    [v5]() {
        with (d8) {
            const v9 = test.FastCAPI;
            const v10 = new v9();
            v10.overloaded_add_all_32bit_int_no_sig(v9, v9, 6);
        }
        const v15 = {
            next() {
                return { done: 10000 };
            },
        };
        return v15;
    },
};
const v18 = new Int16Array();
new Date(WeakSet, Date, -128, ...v18, ...v16);
