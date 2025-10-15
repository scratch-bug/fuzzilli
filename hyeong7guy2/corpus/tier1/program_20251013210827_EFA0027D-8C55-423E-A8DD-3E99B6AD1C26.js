const v1 = Symbol.iterator;
const v3 = {
    [v1]() {
    },
};
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = Int16Array;
}
const v9 = new F5();
function f10() {
    return v3;
}
function f11() {
    function f12() {
        Array(1048576);
        return { done: true };
    }
    return { next: f12 };
}
const v19 = Symbol.iterator;
const v20 = { [v19]: f11 };
v9[Symbol.toPrimitive] = v20;
%PrepareFunctionForOptimization(f10);
%OptimizeMaglevOnNextCall(f10);
f10();
f10.bind(null, ...v20);
