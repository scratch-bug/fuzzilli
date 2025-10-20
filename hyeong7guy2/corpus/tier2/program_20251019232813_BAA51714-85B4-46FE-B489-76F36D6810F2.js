let v0 = -2147483648;
v0++;
const v5 = Symbol.iterator;
const v14 = {
    [v5]() {
        const v13 = {
            next() {
                const v9 = { done: 10 };
                const v10 = `
                `;
                eval();
                v10.length &= v0;
                return v9;
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
