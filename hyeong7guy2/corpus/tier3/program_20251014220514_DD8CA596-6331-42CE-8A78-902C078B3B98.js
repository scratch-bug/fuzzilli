let v0 = class {
    static {
        function f2(a3) {
            function f5(a6) {
                v0 /= this;
                function f7(a8) {
                    const v10 = Uint8ClampedArray();
                    delete v10[v10];
                    return v0;
                }
                Worker(f7);
                return f5;
            }
            this.onmessage = f5;
            return a3;
        }
        new Worker(f2, { type: "function" });
    }
}
