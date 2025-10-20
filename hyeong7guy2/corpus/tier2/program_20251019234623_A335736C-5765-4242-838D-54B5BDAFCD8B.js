const v3 = Symbol.iterator;
const v39 = {
    [v3]() {
        const v6 = [11951,9223372036854775807,536870889,-9,39782];
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            function f11(a12, a13, a14) {
                function F15(a17, a18, a19, a20) {
                    if (!new.target) { throw 'must be called with new'; }
                    try { a18.call(a18, a20, 10, v3, Date); } catch (e) {}
                    const v26 = {
                        construct(a23, a24) {
                            try { a24.every(); } catch (e) {}
                            a24[2] = a24;
                            return a24;
                        },
                    };
                    v26.construct(a14, v6);
                    function f29() {
                        return a12;
                    }
                    const v30 = new Proxy(f29, v26);
                    new v30();
                }
                new F15();
                new F15(a14, a12);
                return F15;
            }
            f11(f11);
        }
        new F7();
        const v38 = {
            next() {
                return { done: 10 };
            },
        };
        return v38;
    },
};
const v42 = new Int16Array();
function f43() {
    const v44 = new Date(WeakSet, Date, 882, ...v42, ...v39);
    return v44;
}
f43();
%PrepareFunctionForOptimization(f43);
%OptimizeFunctionOnNextCall(f43);
f43();
