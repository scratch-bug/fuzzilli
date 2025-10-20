function f1() {
    const v6 = Symbol?.iterator;
    const v17 = {
        [v6]() {
            with (d8) {
                const v10 = test?.FastCAPI;
                let v11;
                try { v11 = new v10(); } catch (e) {}
                try { v11.pass_pointer(this); } catch (e) {}
            }
            const v16 = {
                next() {
                    return { done: 10000 };
                },
            };
            return v16;
        },
    };
    let v19;
    try { v19 = new Int16Array(); } catch (e) {}
    function f20() {
        try { new Date(WeakSet, Date, -128, ...v19, ...v17); } catch (e) {}
        return Symbol;
    }
    try { f20(); } catch (e) {}
    %PrepareFunctionForOptimization(f20);
    %OptimizeFunctionOnNextCall(f20);
    try { f20(); } catch (e) {}
}
Uint8Array.toString = Uint8Array;
const v24 = [0.8609274506895804,7.4865079355344e+307,132923.23387164436];
const v27 = Symbol.iterator;
const v29 = {
    [v27]() {
    },
};
v29.f = v29;
const v30 = new Date();
try { v30.setFullYear(v24, Uint8Array); } catch (e) {}
