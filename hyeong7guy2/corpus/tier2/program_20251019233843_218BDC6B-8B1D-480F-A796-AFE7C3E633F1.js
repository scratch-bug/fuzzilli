const v4 = Symbol.iterator;
const v16 = {
    [v4]() {
        const v7 = new Uint32Array();
        const v8 = v7.length;
        v8 < v8;
        ("from").codePointAt(v8);
        const v15 = {
            next() {
                return { done: 10000 };
            },
        };
        return v15;
    },
};
const v18 = new Int16Array();
function f19() {
    new Date(WeakSet, Date, -128, ...v18, ...v16);
    return v18;
}
f19();
%PrepareFunctionForOptimization(f19);
%OptimizeFunctionOnNextCall(f19);
f19();
