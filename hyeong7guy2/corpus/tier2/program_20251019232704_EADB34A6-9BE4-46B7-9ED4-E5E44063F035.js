const v1 = Symbol.iterator;
const v3 = {
    [v1]() {
    },
};
v3.h = v3;
v3.e = v3;
const v6 = Symbol.iterator;
const v12 = {
    [v6]() {
        this.h = this;
        const v11 = {
            next() {
                return { done: 10 };
            },
        };
        return v11;
    },
};
const v15 = new Int16Array();
function f16() {
    const v17 = new Date(WeakSet, Date, 882, ...v15, ...v12);
    return v17;
}
f16();
%PrepareFunctionForOptimization(f16);
%OptimizeFunctionOnNextCall(f16);
f16();
