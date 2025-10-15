class C1 extends Float64Array {
    constructor(a3, a4) {
    }
}
class C7 extends Float32Array {
}
const v8 = new C7(C1);
const v11 = Symbol.iterator;
const v17 = {
    [v11]() {
        v8[6] >>>= 10;
        const v16 = {
            next() {
                return { done: 10 };
            },
        };
        return v16;
    },
};
const v20 = new Int16Array();
function f21() {
    new Date(WeakSet, Date, 882, ...v20, ...v17);
    return v17;
}
f21();
%PrepareFunctionForOptimization(f21);
%OptimizeFunctionOnNextCall(f21);
f21();
