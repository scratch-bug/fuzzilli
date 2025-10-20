const v6 = Symbol.iterator;
const v19 = {
    [v6]() {
        function f9(a10, a11, a12) {
            return a12;
        }
        const v14 = new Promise(f9);
        v14.finally(v14, 1, Uint8ClampedArray);
        const v18 = {
            next() {
                return { done: 10000 };
            },
        };
        return v18;
    },
};
const v21 = new Int16Array();
function f22() {
    new Date(WeakSet, Date, -128, ...v21, ...v19);
    return v19;
}
f22();
%PrepareFunctionForOptimization(f22);
%OptimizeFunctionOnNextCall(f22);
f22();
