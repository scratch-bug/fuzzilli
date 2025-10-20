function f0(a1) {
    function f2() {
        function f3() {
            function F4(a6, a7, a8, a9) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v10 = F4();
            const v20 = {
                [Symbol]() {
                    const v19 = {
                        next() {
                            const v18 = {
                                construct(a15, a16) {
                                    return "🙌🏿";
                                },
                            };
                            return this;
                        },
                    };
                },
            };
            function F21(a23, a24) {
                if (!new.target) { throw 'must be called with new'; }
                function f25() {
                    let v26 = "´UyVSP";
                    return v26++;
                }
            }
            return v10;
        }
        return f3;
    }
    return f2;
}
new Worker(f0, { type: "function" });
