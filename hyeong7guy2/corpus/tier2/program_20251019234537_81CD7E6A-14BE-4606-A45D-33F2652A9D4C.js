const v4 = Symbol.iterator;
const v24 = {
    [v4]() {
        function F7(a9, a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            a9();
        }
        function f13() {
            with (d8) {
                const v16 = test.FastCAPI;
                const v17 = new v16();
                v17.clamp_compare_i64(v17.enforce_range_compare_i64(v16));
            }
            return F7;
        }
        new F7(f13);
        const v23 = {
            next() {
                return { done: -693855627 };
            },
        };
        return v23;
    },
};
const v26 = new Int16Array();
new Date(WeakSet, Date, -55924, ...v26, ...v24);
