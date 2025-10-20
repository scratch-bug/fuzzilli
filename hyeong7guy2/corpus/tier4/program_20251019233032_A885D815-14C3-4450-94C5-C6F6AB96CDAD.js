const v1 = new Float64Array(Float64Array, Float64Array, Float64Array);
const v2 = [10000,2147483647,536870887,2147483649,46989,-29960];
v2.fill(v1);
function f5(a6, a7, a8) {
    return a8;
}
const v10 = { type: "function" };
v10.flushDenormals = v2;
const v11 = new Worker(f5, v10);
v11.postMessage(v10);
