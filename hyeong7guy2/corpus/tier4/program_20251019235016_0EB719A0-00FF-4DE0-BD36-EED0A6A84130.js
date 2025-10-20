function f0(a1, a2) {
    function f3(a4) {
        f0 = a4;
        return f3;
    }
    return a2;
}
new Worker(f0, { type: "function" });
