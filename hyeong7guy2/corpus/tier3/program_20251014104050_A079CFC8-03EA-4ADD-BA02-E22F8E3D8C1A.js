function f1(a2, a3, a4) {
    return a3;
}
new Worker(f1, { type: "function", __proto__: Array });
