function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = class extends C1 {
}
const v7 = Symbol.iterator;
const v18 = {
    [v7]() {
        with (d8) {
            const t1 = test.FastCAPI;
            const v12 = new t1();
            v12.call_to_number(v2);
        }
        const v17 = {
            next() {
                return { done: 10000 };
            },
        };
        return v17;
    },
};
const v20 = new Int16Array(Date, -128);
function f21() {
    const v22 = new Date(WeakSet, Date, -128, ...v20, ...v18);
    return v22;
}
f21();
%PrepareFunctionForOptimization(f21);
%OptimizeFunctionOnNextCall(f21);
f21();
