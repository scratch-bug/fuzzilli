Object.defineProperty(SharedArrayBuffer, "maxByteLength", { writable: true, enumerable: true, value: SharedArrayBuffer });
const v1 = new SharedArrayBuffer(SharedArrayBuffer, SharedArrayBuffer);
const v3 = new DataView(v1);
for (let i6 = 0, i7 = 10; i7; i7--) {
}
const v13 = {};
function f14() {
    return v3 !== v13;
}
%PrepareFunctionForOptimization(f14);
%OptimizeFunctionOnNextCall(f14);
f14();
