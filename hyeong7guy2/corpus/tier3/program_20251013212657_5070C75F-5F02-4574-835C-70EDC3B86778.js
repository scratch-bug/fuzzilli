function f0() {
    return f0;
}
new Worker(f0, { type: "function" });
