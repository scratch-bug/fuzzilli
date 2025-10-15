const v0 = class {
    static {
        let v1 = this;
        try {
            v1.any();
        } catch(e3) {
            function f4(a5, a6, a7) {
                function f9(a10) {
                    void a5;
                    return a10;
                }
                this.onmessage = f9;
                for (let i13 = 0;
                    i13 < 20000;
                    (() => {
                        i13++;
                        const v20 = Symbol("number");
                        function f21(a22, a23, a24, a25) {
                            return v20;
                        }
                    })()) {
                }
                for (const v27 in a6) {
                    return false;
                }
                e3.f **= a6;
                ({"c":e3,"f":v1,...v1} = e3);
                let v29 = 10;
                for (; v29--;) {
                }
                return f9;
            }
            new Worker(f4, { type: "function" });
        }
    }
}
for (let i36 = 0;
    (() => {
        const v38 = i36 < 20000;
        for (let v39 = 0; v39 < 5; v39++) {
        }
        return v38;
    })();
    ++i36) {
}
