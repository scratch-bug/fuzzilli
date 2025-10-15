function f0(a1, a2) {
    eval(a1);
    return f0;
}
new Worker(f0, { type: "function" });
