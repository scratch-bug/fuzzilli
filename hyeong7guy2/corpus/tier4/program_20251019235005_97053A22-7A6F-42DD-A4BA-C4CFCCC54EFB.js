const v3 = Symbol.iterator;
const v8 = {
    [v3]() {
        const v6 = this?.isPrototypeOf && this;
        v6 || v6;
    },
};
const v11 = new Int16Array(Symbol);
function f12() {
    let v13;
    try { v13 = new Date(WeakSet, Date, 882, ...v11, ...v8); } catch (e) {}
    return v13;
}
f12();
%PrepareFunctionForOptimization(f12);
%OptimizeFunctionOnNextCall(f12);
f12();
