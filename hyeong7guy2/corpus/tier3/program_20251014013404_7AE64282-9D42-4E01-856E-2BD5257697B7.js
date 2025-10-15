function f0(a1, a2) {
    function f3(a4) {
        f3 in a2;
        f0 = a1;
        return f3;
    }
    return a1;
}
new Worker(f0, { type: "function" });
