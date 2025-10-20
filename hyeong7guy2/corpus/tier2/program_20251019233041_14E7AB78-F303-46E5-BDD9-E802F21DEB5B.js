const v4 = Symbol.iterator;
const v19 = {
    [v4]() {
        function f7(a8, a9, a10) {
            for (let v11 = 0; v11 < 5; v11++) {
                "" + v11;
            }
            return a10;
        }
        new Promise(f7);
        const v18 = {
            next() {
                return { done: 10 };
            },
        };
        return v18;
    },
};
const v21 = new Int16Array();
function f22() {
    new Date(WeakSet, Date, 882, ...v21, ...v19);
    return 882;
}
f22();
%PrepareFunctionForOptimization(f22);
%OptimizeFunctionOnNextCall(f22);
f22();
