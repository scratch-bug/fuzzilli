const v0 = class {
    static {
        let v1 = this;
        try {
            v1.any();
        } catch(e3) {
            function f4(a5, a6, a7) {
                for (let v8 = 0; v8 < 50; v8++) {
                }
                for (const v9 in a6) {
                }
                ({"c":e3,"f":v1,...v1} = e3);
                return a6;
            }
            new Worker(f4, { type: "function" });
        }
    }
}
for (let i15 = 0;
    (() => {
        const v17 = i15 < 20000;
        for (let v18 = 0; v18 < 5; v18++) {
        }
        return v17;
    })();
    ++i15) {
}
