const v3 = Symbol.iterator;
const v13 = {
    [v3]() {
        let v5 = 10;
        v5--;
        const v12 = {
            next() {
                const v8 = { done: v5 };
                Date();
                Math.acosh(v5);
                return v8;
            },
        };
        return v12;
    },
};
const v16 = new Int16Array();
function f17() {
    const v18 = new Date(WeakSet, Date, 882, ...v16, ...v13);
    return v18;
}
f17();
%PrepareFunctionForOptimization(f17);
%OptimizeFunctionOnNextCall(f17);
f17();
