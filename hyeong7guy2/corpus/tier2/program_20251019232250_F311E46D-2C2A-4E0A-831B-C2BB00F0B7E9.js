const v5 = Symbol.iterator;
const v18 = {
    get c() {
        return Int16Array;
    },
    [v5]() {
        with (d8) {
            const t1 = test.FastCAPI;
            const v11 = new t1();
            try { v11.is_fast_c_api_object(2); } catch (e) {}
        }
        const v16 = {
            next() {
                return { done: 10000 };
            },
        };
        v16.next();
        return v16;
    },
};
const v20 = new Int16Array();
function f21() {
    const v22 = new Date(WeakSet, Date, -128, ...v20, ...v18);
    try { v22(); } catch (e) {}
    return Symbol;
}
f21();
%PrepareFunctionForOptimization(f21);
%OptimizeFunctionOnNextCall(f21);
f21();
