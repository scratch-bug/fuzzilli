function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                const v14 = Symbol.iterator;
                const v39 = {
                    [v14]() {
                        const v19 = {
                            next() {
                                return { done: 10 };
                            },
                        };
                        function f20() {
                            return f20;
                        }
                        function f21() {
                            function f22() {
                                for (let i24 = 0; i24 < 25000; i24++) {
                                    ("🙌🏿").charAt();
                                }
                                return { done: true };
                            }
                            return { next: f22 };
                        }
                        const v35 = Symbol.iterator;
                        f20.bind(null, ...{ [v35]: f21 });
                        return v19;
                    },
                };
                const v42 = new Int16Array();
                new Date(WeakSet, Date, 882, ...v42, ...v39);
                return v14;
            }
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v44 = new F4(F0, F0);
    class C45 {
        static [v44](a47, a48, a49) {
        }
    }
}
new F0();
