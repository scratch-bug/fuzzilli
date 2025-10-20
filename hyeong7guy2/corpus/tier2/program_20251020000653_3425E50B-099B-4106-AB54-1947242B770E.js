const v4 = Symbol.iterator;
const v13 = {
    [v4]() {
        const v12 = {
            next() {
                const v8 = { done: 10 };
                const v9 = `
                `;
                eval(v9);
                v9.length &= -2147483648;
                return v8;
            },
        };
        return v12;
    },
};
const v16 = new Int16Array();
function f17() {
    new Date(WeakSet, Date, 882, ...v16, ...v13);
    return f17;
}
f17();
%PrepareFunctionForOptimization(f17);
%OptimizeFunctionOnNextCall(f17);
f17();
