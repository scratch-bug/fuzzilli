function f0(a1, a2, a3) {
    function f4(a5, a6) {
        return a1;
    }
    f4(f0, /L/gi);
}
new Worker(f0, { type: "function" });
