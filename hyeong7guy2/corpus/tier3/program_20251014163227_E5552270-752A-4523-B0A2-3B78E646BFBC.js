function f1(a2, a3, a4) {
    Date();
}
new Worker(f1, { type: "function" });
gc();
