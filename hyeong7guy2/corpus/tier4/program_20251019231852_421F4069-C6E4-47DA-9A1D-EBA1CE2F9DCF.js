function f1() {
    const v5 = new Worker(f1, { type: "function" });
    v5.onmessage = v5;
}
f1();
f1();
