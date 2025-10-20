function f0(a1) {
    function f3(a4, a5, a6) {
        return a1;
    }
    const v9 = { type: "function" };
    Object.defineProperty(v9, "flushDenormals", { enumerable: true, get: SharedArrayBuffer });
    new Worker(f3, v9);
    return f0;
}
try { f0(); } catch (e) {}
