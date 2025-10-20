function f0(a1, a2) {
    return a1;
}
const v5 = { type: "function" };
const v6 = new Worker(f0, v5);
const v7 = v6.postMessage;
try { new v7(v5); } catch (e) {}
