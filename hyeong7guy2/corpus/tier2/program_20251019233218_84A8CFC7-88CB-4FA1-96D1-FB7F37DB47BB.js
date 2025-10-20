const v0 = [1.7976931348623157e+308,2.0,0.5027260187797385,1000.0,2.725966752415241];
const v4 = Symbol.iterator;
const v12 = {
    [v4]() {
        Array.isArray(v0);
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
