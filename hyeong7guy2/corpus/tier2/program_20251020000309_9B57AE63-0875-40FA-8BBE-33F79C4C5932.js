const v3 = Symbol.iterator;
const v15 = {
    [v3]() {
        const v14 = {
            next() {
                const v7 = { done: 10 };
                for (let v8 = 0; v8 < 5; v8++) {
                    let constructor = v8;
                    for (let v10 = 0; v10 < 5; v10++) {
                        `getHours${v10}B`;
                        constructor = constructor / 4;
                    }
                }
                return v7;
            },
        };
        return v14;
    },
};
const v18 = new Int16Array();
function f19() {
    const v20 = new Date(WeakSet, Date, 882, ...v18, ...v15);
    return v20;
}
f19();
%PrepareFunctionForOptimization(f19);
%OptimizeFunctionOnNextCall(f19);
f19();
