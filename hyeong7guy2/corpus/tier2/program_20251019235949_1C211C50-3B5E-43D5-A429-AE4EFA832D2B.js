const v4 = Symbol.iterator;
const v21 = {
    [v4]() {
        const v9 = Promise.prototype.catch;
        const v10 = [v4];
        try { v9.apply(Uint8Array, v10); } catch (e) {}
        const v20 = {
            next() {
                const v13 = { done: 10 };
                function f14(a15, a16, a17, a18) {
                    return Promise;
                }
                f14(v10);
                return v13;
            },
        };
        return v20;
    },
};
const v24 = new Int16Array();
function f25() {
    new Date(WeakSet, Date, 882, ...v24, ...v21);
    return v21;
}
f25();
%PrepareFunctionForOptimization(f25);
%OptimizeFunctionOnNextCall(f25);
f25();
