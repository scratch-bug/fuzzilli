const v2 = [10000,2147483647,536870887,2147483649,46989,-29960];
v2.fill(50463n);
function f5(a6, a7, a8) {
    return 50463n;
}
const v10 = { done: false, type: "function" };
v10.getMilliseconds = v2;
const v11 = new Worker(f5, v10);
v11.postMessage(v10);
