function f0(a1, a2, a3) {
    const v4 = [-2147483649];
    const v6 = new WeakMap();
    v6.set(v4);
    const v10 = [0,97];
    for (const v11 in v10) {
        gc(gc);
    }
    return v10;
}
const v17 = new Worker(f0, { type: "function" });
v17.getMessage();
