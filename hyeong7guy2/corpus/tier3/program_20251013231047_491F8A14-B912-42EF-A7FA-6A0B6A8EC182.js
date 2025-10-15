function f0(a1, a2) {
    return a2;
}
const v6 = new Worker(f0, { type: "function" });
v6.onmessage = v6;
