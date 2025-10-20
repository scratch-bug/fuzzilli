function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function F15(a17, a18) {
                if (!new.target) { throw 'must be called with new'; }
                function f20() {
                    return this;
                }
                const v61 = {
                    construct(a22, a23) {
                        function f24(a25, a26) {
                            function f27(a28) {
                                function F31(a33, a34) {
                                    if (!new.target) { throw 'must be called with new'; }
                                    a34--;
                                    this.e = a34;
                                }
                                const v36 = new F31("2147483647", -3612);
                                const v37 = v36.e;
                                const v38 = v37 < v37;
                                new F31();
                                const v42 = Symbol.iterator;
                                const v49 = {
                                    [v42]() {
                                        10 - v38;
                                        const v48 = {
                                            next() {
                                                return { done: 10 };
                                            },
                                        };
                                        return v48;
                                    },
                                };
                                const v52 = new Int16Array();
                                new Date(WeakSet, Date, 882, ...v52, ...v49);
                                return f24;
                            }
                            f27(a26);
                            "codePointAt" !== a25;
                            function F56(a58, a59) {
                                if (!new.target) { throw 'must be called with new'; }
                                return a25;
                            }
                            return a22;
                        }
                        a22.toString = f24;
                        a22.toString();
                        return a11;
                    },
                };
                v61.construct(f20);
            }
            new F15(a12, this);
        }
        new F9();
        return a6;
    }
    f5(a4, F1, a4);
    %OptimizeFunctionOnNextCall(f5);
}
const v66 = new F1();
new F1(Symbol, v66);
new F1();
