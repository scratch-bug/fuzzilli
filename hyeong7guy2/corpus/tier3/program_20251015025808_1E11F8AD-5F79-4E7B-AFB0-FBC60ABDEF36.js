function f0(a1, a2, a3) {
    return f0;
}
const v6 = { type: "function" };
v6.f = v6;
const v7 = new Worker(f0, v6);
v7.postMessage(v6);
