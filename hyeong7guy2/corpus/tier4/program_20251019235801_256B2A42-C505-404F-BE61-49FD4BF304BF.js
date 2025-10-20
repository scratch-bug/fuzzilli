function f0(a1, a2, a3) {
    return f0;
}
const v7 = new Worker(f0, { type: "function" });
const v8 = v7.terminateAndWait;
try { JSON.stringify(1000.0, v8); } catch (e) {}
