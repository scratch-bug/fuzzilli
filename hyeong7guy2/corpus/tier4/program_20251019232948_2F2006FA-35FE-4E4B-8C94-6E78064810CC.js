function f0() {
    new Worker(f0, { type: "function" });
    function f5() {
    }
    const v8 = new Worker(f5, { type: "function" });
    return v8.terminateAndWait(f0);
}
f0();
