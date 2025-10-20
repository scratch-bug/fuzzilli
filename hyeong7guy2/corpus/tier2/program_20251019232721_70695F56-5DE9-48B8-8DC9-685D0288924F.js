const v3 = Symbol.iterator;
const v17 = {
    [v3]() {
        const v8 = {
            next() {
                return { done: 10 };
            },
        };
        function f10() {
            with (d8) {
                const t7 = test.FastCAPI;
                const v14 = new t7();
                v14.overloaded_add_all_32bit_int(f10, v14, test, v14, 30830);
            }
            return 30830;
        }
        f10();
        return v8;
    },
};
const v20 = new Int16Array();
function f21() {
    new Date(WeakSet, Date, 882, ...v20, ...v17);
    return v20;
}
f21();
%PrepareFunctionForOptimization(f21);
%OptimizeFunctionOnNextCall(f21);
f21();
