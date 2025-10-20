const v4 = Symbol.iterator;
const v20 = {
    [v4]() {
        function F6(a8, a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
        }
        with (d8) {
            const t4 = test.FastCAPI;
            const v14 = new t4(v4);
            v14.add_32bit_int(F6, v14);
        }
        const v19 = {
            next() {
                return { done: 10 };
            },
        };
        return v19;
    },
};
const v22 = new Int16Array(882, 882, 882);
function f23() {
    const v24 = new Date(WeakSet, Date, 882, ...v22, ...v20);
    return v24;
}
f23();
%PrepareFunctionForOptimization(f23);
%OptimizeFunctionOnNextCall(f23);
f23();
