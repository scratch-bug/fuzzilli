class C1 extends Float32Array {
}
const v2 = new C1();
const v6 = Symbol.iterator;
const v13 = {
    [v6]() {
        let v8 = 10;
        v2[6] >>>= v8;
        v8--;
        const v12 = {
            next() {
                return { done: v8 };
            },
        };
        return v12;
    },
};
const v16 = new Int16Array();
function f17() {
    const v18 = new Date(WeakSet, Date, 882, ...v16, ...v13);
    return v18;
}
f17();
%PrepareFunctionForOptimization(f17);
%OptimizeFunctionOnNextCall(f17);
f17();
