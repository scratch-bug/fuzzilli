const v2 = class extends Uint16Array {
    constructor(a4, a5) {
        super();
        function f6(a7, a8) {
            const v9 = a8 | a8;
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                function f15(a16, a17, a18) {
                    a14--;
                    return a14;
                }
                f15(a8, arguments);
            }
            new F11(F11, v9);
            return 2147483649;
        }
        f6(f6, 2147483649);
        %PrepareFunctionForOptimization(f6);
        %OptimizeMaglevOnNextCall(f6);
        f6(2147483649, a5);
        function f25() {
            return 2147483649;
        }
        WebAssembly.compile(a5).catch(f25);
    }
}
new v2();
