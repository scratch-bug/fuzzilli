function f0() {
    gc({ execution: "async" });
}
new Worker(f0, { type: "function" });
for (let i10 = 0; i10; ++i10) {
}
