class C1 extends Uint32Array {
}
const v6 = Symbol.iterator;
const v14 = {
    [v6]() {
        ("object").localeCompare("object", "object", C1);
        const v13 = {
            next() {
                return { done: 10 };
            },
        };
        return v13;
    },
};
const v16 = new Int16Array();
function f17() {
    new Date(WeakSet, Date, 882, ...v16, ...v14);
    return v14;
}
f17();
%PrepareFunctionForOptimization(f17);
%OptimizeFunctionOnNextCall(f17);
f17();
