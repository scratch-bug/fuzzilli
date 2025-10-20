class C1 extends Float64Array {
}
class C2 {
}
class C3 extends C2 {
}
const v10 = Symbol.iterator;
const v23 = {
    [v10]() {
        function f13(a14, a15, a16) {
        }
        const v18 = new Promise(f13);
        v18.finally();
        const v22 = {
            next() {
                return { done: 10000 };
            },
        };
        return v22;
    },
};
const v25 = new Int16Array();
function f26() {
    new Date(WeakSet, Date, -128, ...v25, ...v23);
}
f26();
%PrepareFunctionForOptimization(f26);
%OptimizeFunctionOnNextCall(f26);
f26();
