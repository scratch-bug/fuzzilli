const v4 = Symbol.iterator;
const v14 = {
    [v4]() {
        const v13 = {
            next() {
                const v8 = { done: 10 };
                const v11 = (20000).constructor.isSafeInteger(-1.1713044748014374e+307);
                class C12 {
                }
                C12.h = v11;
                return v8;
            },
        };
        return v13;
    },
};
const v17 = new Int16Array();
function f18() {
    const v19 = new Date(WeakSet, Date, 882, ...v17, ...v14);
    return v19;
}
f18();
%PrepareFunctionForOptimization(f18);
%OptimizeFunctionOnNextCall(f18);
f18();
