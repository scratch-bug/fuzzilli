class C2 extends Float32Array {
}
const v3 = new C2();
const v5 = Symbol.iterator;
const v14 = {
    [v5]() {
        let v7 = 10;
        -v7;
        v3[6] >>>= v7;
        v7--;
        const v12 = {
            next() {
                return { done: v7 };
            },
        };
        try { v12(); } catch (e) {}
        return v12;
    },
};
const v17 = new Int16Array();
function f18() {
    new Date(Symbol, Date, 882, ...v17, ...v14);
    return Symbol;
}
f18();
%PrepareFunctionForOptimization(f18);
%OptimizeFunctionOnNextCall(f18);
f18();
