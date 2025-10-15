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
                new F13(f9, F13);
                const v25 = Symbol.iterator;
                const v45 = {
                    [v25]() {
                        const v30 = {
                            next() {
                                return { done: 10 };
                            },
                        };
                        function f31() {
                            return a10;
                        }
                        function f32() {
                            function F33() {
                                if (!new.target) { throw 'must be called with new'; }
                            }
                            new F33();
                            function f36() {
                                return { done: true };
                            }
                            return { next: f36 };
                        }
                        f32();
                        const v41 = Symbol.iterator;
                        f31.bind(null, ...{ [v41]: f32 });
                        return v30;
                    },
                };
                const v48 = new Int16Array();
                new Date(WeakSet, Date, 882, ...v48, ...v45);
            }
            f9(f9());
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v52 = new F4();
    class C53 {
        static [v52](a55, a56, a57) {
        }
    }
}
new F0();
