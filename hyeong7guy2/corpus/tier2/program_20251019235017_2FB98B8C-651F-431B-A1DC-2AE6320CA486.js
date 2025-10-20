function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
function f8(a9) {
    const v10 = {};
    function F11(a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
        function f15() {
            function f16(a17) {
                f16[4] | 7;
                const v22 = { a: 1.1 };
                for (let v23 = 0; v23 < 5; v23++) {
                    class C24 {
                        static [v22](a26, a27) {
                        }
                    }
                    (F0 + v10)[97];
                }
            }
            %OptimizeMaglevOnNextCall(f16);
            return f16;
        }
        Object.defineProperty(this, "toString", { get: f15 });
    }
    const v30 = new F11();
    v30.toString(v30, 12234, Symbol, v30);
    class C32 {
        static [v30](a34, a35, a36) {
        }
        static [v30](a38, a39, a40) {
        }
    }
}
function F41(a43) {
    if (!new.target) { throw 'must be called with new'; }
}
F41[Symbol.toPrimitive] = f8;
const v48 = {
    o(a46, a47) {
        super[F41] = 12234;
        return Symbol;
    },
};
v48.o(F41, f8);
