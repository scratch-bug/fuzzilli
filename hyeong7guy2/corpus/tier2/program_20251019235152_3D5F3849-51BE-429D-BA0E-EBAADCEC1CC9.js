function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -65536;
}
const v3 = new F0();
for (let v5 = 0; v5 < 5; v5++) {
    F0.__proto__ = v3;
}
const v6 = class {
}
const v11 = Symbol.iterator;
const v22 = {
    [v11]() {
        const v15 = String.prototype.lastIndexOf;
        v15.apply(v6, [v15,128]);
        const v21 = {
            next() {
                return { done: 10000 };
            },
        };
        return v21;
    },
};
const v24 = new Int16Array();
function f25() {
    new Date(WeakSet, Date, -128, ...v24, ...v22);
    return v3;
}
f25();
%PrepareFunctionForOptimization(f25);
%OptimizeFunctionOnNextCall(f25);
f25();
