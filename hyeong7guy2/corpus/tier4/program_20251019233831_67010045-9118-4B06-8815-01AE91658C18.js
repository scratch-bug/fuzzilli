const v1 = [0.18758062766098227];
v1.pop();
const v5 = Array(129);
v5[103] = 2394;
v5.h = v5;
function f7(a8, a9, a10) {
    return v5;
}
const v12 = { type: "function" };
v12.arguments = v1;
v12.flushDenormals = v5;
const v13 = new Worker(f7, v12);
v13.postMessage(v12);
