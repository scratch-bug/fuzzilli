class C2 extends Float32Array {
}
const v3 = new C2();
const v6 = Symbol.iterator;
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
}
const v11 = class extends F7 {
}
const v17 = {
    [v6]() {
        v3[6] >>>= v11;
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
    const v22 = new Date(WeakSet, Date, 882, ...v20, ...v17);
    return v22;
}
f21();
%PrepareFunctionForOptimization(f21);
%OptimizeFunctionOnNextCall(f21);
f21();
