function f0(a1, a2, a3) {
    return a3;
}
const v6 = { type: "function" };
const v7 = new Worker(f0, v6);
v7.terminateAndWait();
v7.postMessage(v6);
