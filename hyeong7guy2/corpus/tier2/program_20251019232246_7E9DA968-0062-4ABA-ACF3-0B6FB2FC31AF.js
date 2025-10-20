const v1 = new Map();
const v2 = v1.values();
const v7 = Symbol.iterator;
const v14 = {
    [v7]() {
        function f9() {
            return f9;
        }
        Object.defineProperty(v2, "valueOf", { configurable: true, value: f9 });
        const v13 = {
            next() {
                return { done: 10 };
            },
        };
        return v13;
    },
};
const v16 = new Int16Array(882, 882, 882);
function f17() {
    new Date(WeakSet, Date, 882, ...v16, ...v14);
    return v7;
}
f17();
%PrepareFunctionForOptimization(f17);
%OptimizeFunctionOnNextCall(f17);
f17();
