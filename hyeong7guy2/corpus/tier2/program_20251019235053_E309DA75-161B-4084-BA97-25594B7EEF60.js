class C0 {
}
const v5 = Symbol.iterator;
const v22 = {
    [v5]() {
        function f8(a9, a10, a11) {
            a9.apply(a9, a11, a11, a11, 10);
            function f13() {
                return C0.toWellFormed();
            }
            ({ construct: f13 }).construct();
            return Date;
        }
        new Promise(f8);
        const v21 = {
            next() {
                return { done: 10 };
            },
        };
        return v21;
    },
};
const v24 = new Int16Array();
function f25() {
    const v26 = new Date(WeakSet, Date, 882, ...v24, ...v22);
    return v26;
}
f25();
%PrepareFunctionForOptimization(f25);
%OptimizeFunctionOnNextCall(f25);
f25();
