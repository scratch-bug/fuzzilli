const v3 = Symbol.iterator;
const v20 = {
    [v3]() {
        const v19 = {
            next() {
                const v7 = { done: 10 };
                for (let i9 = 0; i9 < 25000; ++i9) {
                    let constructor = i9;
                    for (let v16 = 0; v16 < 5; v16++) {
                        constructor = constructor / -282280088;
                    }
                }
                return v7;
            },
        };
        return v19;
    },
};
const v23 = new Int16Array(882);
function f24() {
    const v25 = new Date(WeakSet, Date, 882, ...v23, ...v20);
    return v25;
}
f24();
%PrepareFunctionForOptimization(f24);
%OptimizeFunctionOnNextCall(f24);
f24();
