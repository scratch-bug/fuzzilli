class C1 extends Date {
    static {
        let v2 = this;
        function f3(a4, a5) {
            function f7(a8) {
                v2 &= v2;
                return f3;
            }
            this.onmessage = f7;
            const v9 = { 8: Date };
            return a4;
        }
        new Worker(f3, { type: "function" });
    }
}
