for (let i4 = 0, i5 = 10; i5; i5--) {
}
function f11(a12) {
    function F13(a15, a16) {
        if (!new.target) { throw 'must be called with new'; }
        function f17() {
            function f18(a19) {
                f18[4] | 7;
                const v24 = { a: 1.1 };
                for (let v25 = 0; v25 < 5; v25++) {
                    class C26 {
                        static [v24](a28, a29) {
                        }
                    }
                    30349n <= 30349n;
                }
                return 7;
            }
            %OptimizeMaglevOnNextCall(f18);
            return f18;
        }
        Object.defineProperty(this, "toString", { get: f17 });
    }
    const v32 = new F13();
    class C33 {
        static [v32](a35, a36, a37) {
        }
        static [v32](a39, a40, a41) {
        }
        static [v32](a43, a44, a45) {
        }
    }
}
function F46(a48) {
    if (!new.target) { throw 'must be called with new'; }
}
F46[Symbol.toPrimitive] = f11;
const v53 = {
    o(a51, a52) {
        super[F46] = 12234;
        return a51;
    },
};
v53.o();
