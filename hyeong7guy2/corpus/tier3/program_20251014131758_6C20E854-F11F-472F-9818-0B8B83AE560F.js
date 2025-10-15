function f0() {
    const v3 = { type: "function" };
    new Worker(f0, v3);
    return v3;
}
f0();
f0();
