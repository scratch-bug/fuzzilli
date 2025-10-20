function f1(a2, a3) {
    function f5(a6) {
        return this;
    }
    this.onmessage = f5;
    function f7(a8, a9, a10) {
        function f11(a12, a13, a14) {
            with ("10") {
            }
            return a14;
        }
        Worker(f11);
        return a2;
    }
    const v20 = new Worker(f7, { type: "function" });
    return v20;
}
new Worker(f1, { type: "function" });
for (let i26 = 16n; i26 <= 25000; ++i26) {
}
