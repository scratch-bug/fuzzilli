const v3 = Symbol.iterator;
const v26 = {
    [v3]() {
        const v19 = {
            next() {
                const v7 = { done: 10 };
                ([-4096,1964577369]).fill;
                for (let i12 = 0, i13 = 10; i13; i13--) {
                }
                return v7;
            },
        };
        v19.next();
        v19.next();
        for (let v23 = 0; v23 < 5; v23++) {
            const v25 = v23 ? {} : Object;
            v25.toISOString = v25;
        }
        return v19;
    },
};
function f28() {
    const v29 = new Date(WeakSet, Date, 882, ...v26, ...v26);
    return v29;
}
f28();
%PrepareFunctionForOptimization(f28);
%OptimizeMaglevOnNextCall(f28);
f28();
