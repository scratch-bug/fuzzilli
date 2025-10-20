function f0() {
    const v4 = new Worker(f0, { type: "function" });
    return v4.onmessage;
}
f0();
f0();
