function f1() {
    function f2(a3, a4) {
        function f5(a6, a7, a8) {
            function F9(a11, a12, a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                const v15 = `
                    function F17(a19, a20) {
                        if (!new.target) { throw 'must be called with new'; }
                        function f21() {
                            function F22(a24, a25) {
                                if (!new.target) { throw 'must be called with new'; }
                                const v26 = class extends F22 {
                                    static [a20](a28, a29, a30, a31) {
                                    }
                                }
                            }
                            const v33 = Symbol.iterator;
                            const v38 = {
                                [v33]() {
                                    const v36 = {
                                        next() {
                                            return this;
                                        },
                                    };
                                    for (let [v37] of a11) {
                                    }
                                },
                            };
                            const v41 = new Int16Array();
                            new Date(WeakSet, Date, 882, ...v41, ...v38);
                            return a20;
                        }
                        Object.defineProperty(this, "toString", { get: f21 });
                    }
                    const v43 = new F17(Date, a14);
                    class C44 {
                        static [v43](a46, a47, a48) {
                        }
                    }
                `;
                eval(v15);
            }
            new F9();
            return f2;
        }
        new Worker(f5, { type: "function" });
        return "function";
    }
    f2(f1, f2);
    return f2(f1, f2);
}
const v58 = { construct: f1 };
v58.construct(Symbol, v58, Symbol, v58);
