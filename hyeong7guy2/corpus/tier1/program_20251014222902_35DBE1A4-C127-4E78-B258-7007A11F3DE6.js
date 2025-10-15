class C2 extends Float32Array {
}
const v3 = new C2();
const v6 = Symbol.iterator;
const v15 = {
    [v6]() {
        let v8 = 10;
        -v8;
        v3[6] >>>= v8;
        v8--;
        const v13 = {
            next() {
                return { done: v8 };
            },
        };
        try { v13(v8, Date, v13); } catch (e) {}
        return v13;
    },
};
const v18 = new Int16Array();
function f19() {
    new Date(WeakSet, Date, 882, ...v18, ...v15);
    return Symbol;
}
f19();
%PrepareFunctionForOptimization(f19);
%OptimizeFunctionOnNextCall(f19);
f19();
