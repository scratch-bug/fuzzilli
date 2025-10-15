const v3 = Symbol.iterator;
const v13 = {
    [v3]() {
        class C8 extends Temporal.Duration {
        }
        const v9 = new C8();
        const v12 = {
            next() {
                v9.d = v9;
                return { done: 10 };
            },
        };
        return v12;
    },
};
const v16 = new Int16Array(Date);
function f17() {
    new Date(WeakSet, Date, 882, ...v16, ...v13);
    return WeakSet;
}
f17();
%PrepareFunctionForOptimization(f17);
%OptimizeFunctionOnNextCall(f17);
f17();
