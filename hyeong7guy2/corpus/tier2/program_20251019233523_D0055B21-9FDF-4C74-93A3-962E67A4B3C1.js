function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = Symbol.iterator;
const v20 = {
    [v7]() {
        d8.Symbol = this;
        d8.Symbol = Int16Array;
        with (d8) {
            const v11 = test.FastCAPI;
            const v12 = new v11(v11, WeakSet);
            try { v12.add_all_uint32_typed_array(v12); } catch (e) {}
            try { v12.add_all_uint32_typed_array(F1); } catch (e) {}
            v12.fast_attribute;
        }
        const v19 = {
            next() {
                return { done: 10000 };
            },
        };
        return v19;
    },
};
const v22 = new Int16Array();
function f23() {
    const v24 = new Date(WeakSet, Date, -128, ...v22, ...v20);
    return v24;
}
f23();
%PrepareFunctionForOptimization(f23);
%OptimizeFunctionOnNextCall(f23);
f23();
