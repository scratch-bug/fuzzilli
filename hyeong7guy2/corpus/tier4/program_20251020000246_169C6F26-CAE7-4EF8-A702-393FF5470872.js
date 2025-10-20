const v2 = [10000,2147483647,536870887,2147483649,46989,-29960];
const v3 = v2.fill(65536n);
function f5(a6, a7, a8) {
    return v3;
}
const v10 = { type: "function" };
v10.getMilliseconds = 4.0;
v10.is = v2;
const v11 = new Worker(f5, v10);
v11.postMessage(v10);
