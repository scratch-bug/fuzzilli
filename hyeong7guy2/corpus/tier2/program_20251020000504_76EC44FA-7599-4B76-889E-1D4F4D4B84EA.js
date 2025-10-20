function f0() {
    function f1(a2, a3) {
        function f4(a5, a6, a7) {
            function F8(a10, a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                const v14 = `
                    function F16(a18, a19) {
                        if (!new.target) { throw 'must be called with new'; }
                        function f20() {
                            const v23 = Symbol.iterator;
                            const v29 = {
                                [v23]() {
                                    class C27 extends Intl.DateTimeFormat {
                                    }
                                    new C27();
                                },
                            };
                            const v32 = new Int16Array(v29);
                            const v33 = new Date(WeakSet, Date, 882, ...v32, ...v29);
                            return v33;
                        }
                        Object.defineProperty(this, "toString", { get: f20 });
                    }
                    const v34 = new F16();
                    class C35 {
                        static [v34](a37, a38, a39) {
                        }
                    }
                `;
                eval(v14);
            }
            new F8();
            return f0;
        }
        new Worker(f4, { type: "function" });
        return f0;
    }
    const v47 = f1(f0, f1);
    f1(v47, v47);
    return f0;
}
({ construct: f0 }).construct();
