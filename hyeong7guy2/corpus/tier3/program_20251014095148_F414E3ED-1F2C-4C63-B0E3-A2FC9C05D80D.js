function f1() {
    return f1;
}
const v2 = class extends f1 {
    static {
        super.e = this;
        function f4(a5, a6, a7) {
            function f9(a10) {
                const v16 = {
                    [Symbol]() {
                        const v15 = {
                            next() {
                                return this;
                            },
                            next() {
                                return super.getTime();
                            },
                        };
                    },
                };
                return a7;
            }
            this.onmessage = f9;
            return a5;
        }
        let v19 = 0;
        do {
            for (let v20 = 0; v20 < 5; v20++) {
                function f21(a22, a23, a24, a25) {
                    return v20;
                }
            }
            v19++;
        } while ((() => {
                const v28 = v19 < 10;
                class C29 {
                }
                return v28;
            })())
        new Worker(f4, { type: "function" });
    }
}
