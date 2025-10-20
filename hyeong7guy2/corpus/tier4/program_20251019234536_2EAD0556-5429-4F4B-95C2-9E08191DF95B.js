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
                    [0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,i9];
                    eval();
                    return i9;
                })();
                ) {
            }
            return v7;
        }
        new Worker(f3, { type: "function" });
    }
}
