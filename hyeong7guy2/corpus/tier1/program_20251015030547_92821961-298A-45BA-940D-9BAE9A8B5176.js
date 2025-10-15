Symbol.iterator;
class C2 {
}
new C2();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        function f12() {
            function f13(a14) {
                function F15(a17, a18) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                new F15(f13, F15);
                const v23 = Symbol.iterator;
                const v52 = {
                    [v23]() {
                        const v28 = {
                            next() {
                                return { done: 10 };
                            },
                        };
                        function f29() {
                        }
                        function f30() {
                            function f31() {
                                function f32(a33, a34, a35) {
                                    function f37(a38) {
                                    }
                                    this.onmessage = f37;
                                    for (const v40 in this) {
                                    }
                                }
                                new Worker(f32, { type: "function" });
                                return { done: true };
                            }
                            return { next: f31 };
                        }
                        const v48 = Symbol.iterator;
                        f29.bind(null, ...{ [v48]: f30 });
                        return v28;
                    },
                };
                const v55 = new Int16Array();
                new Date(WeakSet, Date, 882, ...v55, ...v52);
            }
            f13();
            return f13;
        }
        Object.defineProperty(this, "toString", { get: f12 });
    }
    const v58 = new F8();
    class C59 {
        static [v58](a61, a62, a63) {
        }
    }
}
new F4();
