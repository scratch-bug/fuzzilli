function f2() {
    const v6 = Symbol.iterator;
    const v20 = {
        [v6]() {
            with (d8) {
                const t1 = test.LeafInterfaceType;
                new t1();
                const v12 = test.FastCAPI;
                const v13 = new v12();
                const v14 = v13?.get_null_pointer;
                try { new v14(v12, Date); } catch (e) {}
            }
            const v19 = {
                next() {
                    return { done: 10000 };
                },
            };
            return v19;
        },
    };
    const v22 = new Int16Array();
    function f23() {
        new Date(WeakSet, Date, -128, ...v22, ...v20);
        return v6;
    }
    f23();
    %PrepareFunctionForOptimization(f23);
    %OptimizeFunctionOnNextCall(f23);
    f23();
}
Uint8Array.toString = f2;
const v27 = [0.8609274506895804,7.4865079355344e+307,132923.23387164436];
const v29 = new Date(Date);
v29.setFullYear(v27, Uint8Array);
