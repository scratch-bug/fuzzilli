for (let v0 = 0; v0 < 5; v0++) {
    function f1(a2, a3, a4) {
        function f6(a7) {
            return this;
        }
        this.onmessage = f6;
    }
    new Worker(f1, { type: "function" });
}
