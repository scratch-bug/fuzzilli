class C0 {
    static {
        function f2(a3, a4, a5) {
            function f7(a8) {
                const h = this;
                h++;
                return f7;
            }
            this.onmessage = f7;
            return a5;
        }
        new Worker(f2, { type: "function" });
    }
}
for (let i16 = 10, i17 = 10; i17; i17--) {
}
