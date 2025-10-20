function f0() {
    function f1(a2, a3) {
        function f4(a5, a6, a7) {
            function F8(a10, a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                const v14 = `
                    function f17(a18) {
                        class C19 {
                            static #o(a21, a22, a23) {
                            }
                        }
                        return Symbol;
                    }
                    function F24(a26) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    F24[Symbol.toPrimitive] = f17;
                    const v31 = {
                        o(a29, a30) {
                            super[F24] = 0;
                            return a7;
                        },
                    };
                    v31.o(a7, F24);
                `;
                eval(v14);
            }
            new F8();
            return F8;
        }
        new Worker(f4, { type: "function" });
        return f0;
    }
    f1(f0, f1(f1, f0));
    return f0;
}
({ construct: f0 }).construct();
