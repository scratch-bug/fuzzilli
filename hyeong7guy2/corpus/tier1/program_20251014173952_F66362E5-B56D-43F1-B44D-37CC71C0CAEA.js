const v2 = Object(-1125278863n);
function f3() {
    const v7 = Symbol.iterator;
    const v12 = {
        [v7]() {
            const v11 = {
                next() {
                    return { done: v2 };
                },
            };
            return v11;
        },
    };
    const v15 = new Int16Array(v2);
    function f16() {
        const v17 = new Date(WeakSet, Date, 882, ...v15, ...v12);
        return v17;
    }
    f16();
    %PrepareFunctionForOptimization(f16);
    %OptimizeFunctionOnNextCall(f16);
    f16();
    return Int16Array;
}
const v20 = class extends f3 {
}
new v20();
