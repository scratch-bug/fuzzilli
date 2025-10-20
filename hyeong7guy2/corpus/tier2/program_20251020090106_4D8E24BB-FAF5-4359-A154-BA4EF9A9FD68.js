const v2 = { done: true };
const v6 = Symbol.iterator;
const v13 = {
    [v6]() {
        let v8 = 10;
        const v12 = {
            next() {
                v8 = 9223372036854775807;
                const v10 = { done: v8 };
                class C11 {
                }
                C11.h = WeakSet;
                C11.h = v8;
                return v10;
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
