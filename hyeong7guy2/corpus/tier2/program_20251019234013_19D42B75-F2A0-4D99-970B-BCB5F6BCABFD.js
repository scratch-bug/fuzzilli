function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            with (d8) {
                const t5 = test.FastCAPI;
                new t5();
            }
            return a3;
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
                        return d8;
                    }
                    F33.constructor = f40;
                    new F33(1, 4, f40);
                }
                return 115;
            }
            f16(v15, a14);
        }
        return a3;
    }
    function F47(a49) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v50 = new F47();
    for (let [i54, i55] = (() => {
            v12--;
            return [0, 10];
        })();
        i55;
        i55--) {
    }
    F47[Symbol.toPrimitive] = f13;
    const v65 = {
        o(a63, a64) {
            super[F47] = v12;
            return this;
        },
    };
    v65.o(Symbol, v65);
    function F67(a69, a70) {
        if (!new.target) { throw 'must be called with new'; }
        function f71() {
            function f72(a73) {
                gc();
            }
            return f72;
        }
        Object.defineProperty(this, "toString", { get: f71 });
    }
    const v76 = new F67(v50, a4);
    class C77 {
        static [v76](a79, a80, a81) {
        }
    }
}
const v82 = new F1();
class C83 {
    static [v82](a85, a86, a87) {
    }
}
