function f0() {
    const v1 = %WasmArray();
}
new Worker(f0, { type: "function" });
gc();
