class C0 {
    static {
        function f2(a3, a4, a5) {
            Object.defineProperty(this, "h", { writable: true, value: this === "symbol" });
            return C0;
        }
        new Worker(f2, { type: "function" });
    }
}
