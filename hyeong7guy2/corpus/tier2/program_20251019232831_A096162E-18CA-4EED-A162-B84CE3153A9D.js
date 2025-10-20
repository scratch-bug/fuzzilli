const v4 = Symbol.iterator;
const v14 = {
    [v4]() {
        let v6 = 10;
        const v13 = {
            next() {
                v6 = 9223372036854775807;
                const v8 = { done: v6 };
                const v11 = (20000).constructor.isSafeInteger(v6);
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
    new Date(WeakSet, Date, 882, ...v17, ...v14);
    return Int16Array;
}
f18();
%PrepareFunctionForOptimization(f18);
%OptimizeFunctionOnNextCall(f18);
f18();
