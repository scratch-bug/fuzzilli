const v1 = class extends Float32Array {
}
const v2 = new v1();
const v7 = Symbol.iterator;
const v18 = {
    [v7]() {
        with (d8) {
            const v11 = test.FastCAPI;
            const v12 = new v11(this, v11);
            v12.add_all_uint32_typed_array(v2);
        }
        const v17 = {
            next() {
                return { done: 10000 };
            },
        };
        return v17;
    },
};
const v20 = new Int16Array();
new Date(WeakSet, Date, -128, ...v20, ...v18);
