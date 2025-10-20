const v1 = new Int8Array();
const v3 = class extends Uint16Array {
}
const v7 = new v3();
function f8() {
    new Date(WeakSet, Date, -128, ...v7, ...v1);
    return v1;
}
f8();
%PrepareFunctionForOptimization(f8);
%OptimizeFunctionOnNextCall(f8);
f8();
