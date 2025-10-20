function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            with (d8) {
                const v10 = test.FastCAPI;
                new v10(f5, f6, v10, a4, v10);
            }
            return a4;
        }
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
    let v12 = 12234;
    function f13(a14) {
        for (let v15 = 0; v15 < 5; v15++) {
            function f16(a17, a18) {
                for (const v32 in [0,97,115,109,1,0,2,0,-256,4,1,96]) {
                    function F33(a35, a36, a37) {
                        if (!new.target) { throw 'must be called with new'; }
                        const t20 = F33.constructor;
                        t20();
                    }
                    function f40() {
                        with (d8) {
                            const t25 = test.FastCAPI;
                            new t25();
                        }
                    }
                    F33.constructor = f40;
                    new F33(this, 2, v15);
                    function F46(a48, a49) {
                        if (!new.target) { throw 'must be called with new'; }
                        function f50() {
                        }
                        Object.defineProperty(this, "toString", { get: f50 });
                    }
                    new F46();
                }
                return 115;
            }
            f16(a14, a14);
        }
    }
    function F53(a55) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F53();
    for (let [i60, i61] = (() => {
            v12--;
            return [0, 10];
        })();
        i61;
        i61--) {
    }
    F53[Symbol.toPrimitive] = f13;
    const v71 = {
        o(a69, a70) {
            super[F53] = v12;
        },
    };
    v71.o();
    function F73(a75, a76) {
        if (!new.target) { throw 'must be called with new'; }
        function f77() {
            function f78(a79) {
                gc();
            }
            return f78;
        }
        Object.defineProperty(this, "toString", { get: f77 });
    }
    const v82 = new F73(F1, F53);
    class C83 {
        static [v82](a85, a86, a87) {
        }
    }
}
const v88 = new F1();
class C89 {
    static [v88](a91, a92, a93) {
    }
}
