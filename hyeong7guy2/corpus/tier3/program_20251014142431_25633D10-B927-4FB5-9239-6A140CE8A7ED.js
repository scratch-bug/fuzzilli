function f1(a2, a3) {
    new ArrayBuffer(1073741824);
    return 1073741824;
}
new Worker(f1, { type: "function" });
new Uint32Array(268435440);
