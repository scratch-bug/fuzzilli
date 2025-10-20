function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    let v6 = 12234;
    function f7(a8) {
        for (let v9 = 0; v9 < 5; v9++) {
            function f10(a11, a12) {
                gc({ execution: "sync" });
                const v29 = [0,97,115,109,1,0,2,0,-256,4,1,96];
                for (const v30 in v29) {
                    function F31(a33, a34, a35) {
                        if (!new.target) { throw 'must be called with new'; }
                        const t11 = F31.constructor;
                        t11();
                    }
                    function f38() {
                        with (d8) {
                            const t16 = test.FastCAPI;
                            new t16(v9, v29, 1, a8, F31);
                        }
                        return 4;
                    }
                    F31.constructor = f38;
                    new F31();
                }
                return gc;
            }
            f10();
            v6 = a8;
            Symbol(a3);
        }
        return a8;
    }
    function F46(a48) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F46();
    for (let [i53, i54] = (() => {
            v6--;
            return [0, 10];
        })();
        i54;
        i54--) {
    }
    F46[Symbol.toPrimitive] = f7;
    const v65 = {
        o(a63, a64) {
            super[F46] = v6;
            return a64;
        },
    };
    v65.o(F1, v65);
}
new F1();
