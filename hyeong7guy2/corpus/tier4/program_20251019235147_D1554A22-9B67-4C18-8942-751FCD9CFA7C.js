class C0 {
    constructor(a2, a3) {
        function f4(a5, a6) {
            const v7 = a6 | a6;
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                a11.prototype = a11;
                function f13(a14, a15, a16) {
                    a15[1];
                    return v7;
                }
                f13(arguments, f13);
                f13(a6, arguments);
            }
            const v20 = new F9(F9, v7);
            return v20;
        }
        f4.prototype = f4;
        f4();
        %PrepareFunctionForOptimization(f4);
        %OptimizeMaglevOnNextCall(f4);
        f4(C0, a2);
    }
}
new C0();
