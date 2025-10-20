const v3 = Symbol.iterator;
const v17 = {
    [v3]() {
        function F6() {
            if (!new.target) { throw 'must be called with new'; }
            [{ a: 1 }];
            const v12 = { a: 1.1 };
        }
        new F6();
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
    return WeakSet;
}
f21();
%PrepareFunctionForOptimization(f21);
%OptimizeFunctionOnNextCall(f21);
f21();
