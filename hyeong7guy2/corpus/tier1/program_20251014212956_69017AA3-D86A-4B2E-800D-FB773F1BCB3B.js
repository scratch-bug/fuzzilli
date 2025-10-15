class C1 extends Float32Array {
}
const v2 = new C1();
const v6 = Symbol.iterator;
const v15 = {
    [v6]() {
        let v8 = 10;
        v2[6] >>>= v8;
        v8--;
        const v12 = {
            next() {
                return { done: v8 };
            },
        };
        function f13() {
            return WeakSet;
        }
        const v14 = { [Symbol]: f13 };
        return v12;
    },
};
const v18 = new Int16Array();
function f19() {
    new Date(WeakSet, Date, 882, ...v18, ...v15);
    return v18;
}
f19();
%PrepareFunctionForOptimization(f19);
%OptimizeFunctionOnNextCall(f19);
f19();
