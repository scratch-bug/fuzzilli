const v3 = Symbol.iterator;
const v37 = {
    [v3]() {
        const v6 = [11951,9223372036854775807,536870889,-9,39782];
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            function f11(a12, a13, a14) {
                function F15(a17, a18, a19, a20) {
                    if (!new.target) { throw 'must be called with new'; }
                    const v24 = {
                        construct(a22, a23) {
                            a23[2] = a19;
                            return a23;
                        },
                    };
                    v24.construct(a14, v6);
                    function f27() {
                        return a9;
                    }
                    const v28 = new Proxy(f27, v24);
                    new v28(a13);
                }
                new F15(a13, a14, WeakSet, a14);
                new F15();
                return a9;
            }
            f11();
        }
        new F7(10, Symbol);
        const v36 = {
            next() {
                return { done: 10 };
            },
        };
        return v36;
    },
};
const v40 = new Int16Array();
function f41() {
    const v42 = new Date(WeakSet, Date, 882, ...v40, ...v37);
    return v42;
}
f41();
%PrepareFunctionForOptimization(f41);
%OptimizeFunctionOnNextCall(f41);
f41();
