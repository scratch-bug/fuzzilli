function f0() {
    function f1(a2, a3) {
        function f4(a5, a6, a7) {
            function F8(a10, a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                const v14 = `
                    function F15(a17, a18) {
                        if (!new.target) { throw 'must be called with new'; }
                        function f19() {
                            const v21 = Symbol.iterator;
                            const v29 = {
                                [v21]() {
                                    eval(v14);
                                    function F25(a27, a28) {
                                        if (!new.target) { throw 'must be called with new'; }
                                    }
                                },
                            };
                            new Int16Array(v29);
                            return v21;
                        }
                        Object.defineProperty(this, "toString", { get: f19 });
                    }
                    const v32 = new F15(F15, a5);
                    class C33 {
                        static [v32](a35, a36, a37) {
                        }
                    }
                `;
                eval(v14);
            }
            new F8();
            return a5;
        }
        new Worker(f4, { type: "function" });
        return f4;
    }
    f1();
    return f1();
}
({ construct: f0 }).construct();
