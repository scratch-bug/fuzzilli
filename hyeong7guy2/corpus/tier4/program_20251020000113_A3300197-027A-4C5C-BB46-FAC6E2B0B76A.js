new Int8Array(1083);
function f8() {
    return 1218741572n;
}
new Uint8ClampedArray(128);
const v12 = class {
}
function f13() {
    const v14 = [];
    v14.findLast(v12);
    return v14.some(f13);
}
f13();
%PrepareFunctionForOptimization(f13);
%OptimizeFunctionOnNextCall(f13);
f13();
