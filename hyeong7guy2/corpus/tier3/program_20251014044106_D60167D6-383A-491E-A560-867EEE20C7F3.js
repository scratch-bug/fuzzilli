function f0() {
    return f0;
}
const v1 = class extends f0 {
    static {
        function f3(a4, a5, a6) {
            const v7 = class {
            }
            for (let i9 = 0;
                (() => {
                    Object.defineProperty(v7, this, { configurable: true, get: f0 });
                    eval();
                    return i9;
                })();
                ) {
            }
            return f3;
        }
        new Worker(f3, { type: "function" });
    }
}
