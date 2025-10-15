function f0(a1, a2, a3) {
    return a2;
}
const v7 = new Worker(f0, { type: "function" });
const v8 = v7.terminateAndWait;
try { v8(); } catch (e) {}
