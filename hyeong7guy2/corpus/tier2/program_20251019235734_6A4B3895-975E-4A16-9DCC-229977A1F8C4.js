function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                function F13(a15, a16) {
                    if (!new.target) { throw 'must be called with new'; }
                    a16--;
                    this.e = a16;
                }
                const v18 = new F13("2147483647", -3612);
                const v19 = v18.e;
                v19 - v19;
                new F13();
                const v25 = Symbol.iterator;
                const v41 = {
                    [v25]() {
                        const v30 = {
                            next() {
                                return { done: 10 };
                            },
                        };
                        function F31(a33, a34) {
                            if (!new.target) { throw 'must be called with new'; }
                            function f35() {
                                function f36(a37) {
                                    const v38 = /xyz{1,}/dmv;
                                    v38.b = v38;
                                    return Date;
                                }
                                return f36;
                            }
                            Object.defineProperty(this, "toString", { get: f35 });
                        }
                        const v39 = new F31(f9, f9);
                        v39.toString(this, -3612, f9, v39, f8);
                        return v30;
                    },
                };
                const v44 = new Int16Array();
                new Date(WeakSet, Date, 882, ...v44, ...v41);
            }
            f9(f9);
            f9(a2);
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v48 = new F4(this, this);
    class C49 {
        static [v48](a51, a52, a53) {
        }
    }
}
new F0();
