const v0 = [0.18758062766098227];
v0[0] = v0;
v0.pop();
function f3(a4, a5, a6) {
    return a5;
}
const v8 = { type: "function" };
v8.arguments = v0;
const v9 = new Worker(f3, v8);
v9.postMessage(v8);
