function f0(a1, a2, a3) {
    return a2;
}
const v7 = new Worker(f0, { type: "function" });
v7.terminate();
