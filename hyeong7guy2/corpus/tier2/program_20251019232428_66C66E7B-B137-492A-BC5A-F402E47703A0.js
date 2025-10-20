function f1() {
    const v6 = Symbol.iterator;
    const v21 = {
        [v6](a8, a9, a10) {
        },
        [v6]() {
            with (d8) {
                const v14 = test.FastCAPI;
                const v15 = new v14(v14, v14);
                try { v15.pass_pointer(this); } catch (e) {}
            }
            const v20 = {
                next() {
                    return { done: 10000 };
                },
            };
            return v20;
        },
    };
    const v23 = new Int16Array();
    function f24() {
        const v25 = new Date(WeakSet, Date, -128, ...v23, ...v21);
        return v25;
    }
    f24();
    %PrepareFunctionForOptimization(f24);
    %OptimizeFunctionOnNextCall(f24);
    f24();
}
Uint8Array.toString = f1;
const v28 = [0.8609274506895804,7.4865079355344e+307,132923.23387164436];
const v30 = new Date();
v30.setFullYear(v28, Uint8Array);
