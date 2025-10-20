const v3 = Symbol.iterator;
const v14 = {
    [v3]() {
        const v13 = {
            next() {
                const v7 = { done: 10 };
                for (let v8 = 0; v8 < 5; v8++) {
                    let constructor = v8;
                    for (let v10 = 0; v10 < 5; v10++) {
                        constructor = constructor >> 4;
                    }
                }
                return v7;
            },
        };
        return v13;
    },
};
const v17 = new Int16Array();
function f18() {
    new Date(WeakSet, Date, 882, ...v17, ...v14);
    return Symbol;
}
f18();
%PrepareFunctionForOptimization(f18);
%OptimizeFunctionOnNextCall(f18);
f18();
