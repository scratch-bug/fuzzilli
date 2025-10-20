function f2(a3) {
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                f9[4] | 7;
                const v15 = { a: 1.1 };
                for (let v16 = 0; v16 < 5; v16++) {
                    class C17 {
                        static [v15](a19, a20) {
                        }
                    }
                    C17.constructor.call();
                }
            }
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v23 = new F4(12234, F4);
    const t21 = v23.toString;
    t21();
    class C26 {
        static [v23](a28, a29, a30) {
        }
        static [v23](a32, a33, a34) {
        }
    }
}
function F35(a37) {
    if (!new.target) { throw 'must be called with new'; }
}
F35[Symbol.toPrimitive] = f2;
const v42 = {
    o(a40, a41) {
        super[F35] = 12234;
        return a40;
    },
};
v42.o();
