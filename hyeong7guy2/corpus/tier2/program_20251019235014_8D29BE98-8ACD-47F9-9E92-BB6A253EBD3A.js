function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            for (let v15 = 0; v15 < 5; v15++) {
            }
            function F16(a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                function f21() {
                    return f21;
                }
                const v35 = {
                    construct(a23, a24) {
                        function f25(a26, a27) {
                            [a11,a13,"string","codePointAt" !== a26,a12];
                            function F30(a32, a33) {
                                if (!new.target) { throw 'must be called with new'; }
                                return a26;
                            }
                            return a7;
                        }
                        a23.toString = f25;
                        a23.toString();
                        return a8;
                    },
                };
                v35.construct(f21);
            }
            new F16(a4, this);
        }
        new F9();
        return a6;
    }
    f5(a4, a3, f5);
    %OptimizeFunctionOnNextCall(f5);
}
new F1("string", "string");
new F1();
new F1();
