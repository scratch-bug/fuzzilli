const v3 = Symbol.iterator;
const v9 = {
    [v3]() {
        this.b = this;
        const v8 = {
            next() {
                return { done: 10 };
            },
        };
        return v8;
    },
};
const v12 = new Int16Array();
function f13() {
    new Date(WeakSet, Date, 882, ...v12, ...v9);
    return 882;
}
f13();
%PrepareFunctionForOptimization(f13);
%OptimizeFunctionOnNextCall(f13);
f13();
