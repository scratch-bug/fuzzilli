function f0(a1, a2, a3) {
    function f5(a6) {
        return a6;
    }
    this.onmessage = f5;
    do {
    } while (8)
}
new Worker(f0, { type: "function" });
for (let v13 = 0; v13 < 50; v13++) {
    try { WebAssembly(v13, f0, BigUint64Array); } catch (e) {}
}
