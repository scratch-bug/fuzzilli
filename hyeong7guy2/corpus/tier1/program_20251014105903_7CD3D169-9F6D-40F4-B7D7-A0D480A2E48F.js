for (let i = 0; i < 5; i++) {
    function f0(a1, a2, a3) {
        return f0;
    }
    new Worker(f0, { type: "function" });
}
