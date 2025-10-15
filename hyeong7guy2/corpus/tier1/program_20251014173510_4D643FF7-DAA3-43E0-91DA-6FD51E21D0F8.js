class C2 extends Float32Array {
}
const v3 = new C2();
const v6 = Symbol.iterator;
const v12 = {
    [v6]() {
        v3[6] >>>= 10;
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
    new Date(WeakSet, Date, 882, ...v15, ...v12);
    return WeakSet;
}
f16();
%PrepareFunctionForOptimization(f16);
%OptimizeFunctionOnNextCall(f16);
f16();
