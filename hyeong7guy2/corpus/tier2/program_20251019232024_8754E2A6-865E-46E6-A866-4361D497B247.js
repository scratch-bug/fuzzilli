const v3 = Symbol.iterator;
const v13 = {
    [v3]() {
        const v12 = {
            next() {
                const v7 = { done: 10 };
                for (let v8 = 0; v8 < 5; v8++) {
                    for (let v9 = 0; v9 < 5; v9++) {
                        v8 = v8 * -282280088;
                    }
                }
                return v7;
            },
        };
        return v12;
    },
};
const v16 = new Int16Array();
function f17() {
    new Date(WeakSet, Date, 882, ...v16, ...v13);
    return Date;
}
f17();
%PrepareFunctionForOptimization(f17);
%OptimizeFunctionOnNextCall(f17);
f17();
