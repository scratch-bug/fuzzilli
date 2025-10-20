const v1 = new Set();
function f3(a4, a5, a6) {
    return a6;
}
const v8 = { type: "function" };
v8.a = v1;
const v9 = new Worker(f3, v8);
v9.postMessage(v8);
