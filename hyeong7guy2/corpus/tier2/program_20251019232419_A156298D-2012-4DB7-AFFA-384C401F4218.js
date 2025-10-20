function f1() {
    const v6 = Symbol.iterator;
    const v26 = {
        [v6]() {
            with (d8) {
                try { test.installConditionalFeatures(); } catch (e) {}
                let v11;
                try { v11 = test.setFlushDenormals(); } catch (e) {}
                v11 ?? v11;
                const t4 = test.FastCAPI;
                const v14 = new t4();
                try { v14(Uint8Array); } catch (e) {}
                try { v14.add_all_uint32_typed_array(this); } catch (e) {}
                let v17;
                try { v17 = v14.pass_pointer(this); } catch (e) {}
                v17 ?? v17;
            }
            const v24 = {
                next() {
                    try { this(); } catch (e) {}
                    try { this(); } catch (e) {}
                    return { done: 10000 };
                },
            };
            try { v24.propertyIsEnumerable(); } catch (e) {}
            return v24;
        },
    };
    let v27 = -128;
    const v28 = v27--;
    const v29 = new Int16Array();
    function f30() {
        new Date(WeakSet, Date, v27, ...v29, ...v26);
        return Uint8Array;
    }
    f30();
    %PrepareFunctionForOptimization(f30);
    %OptimizeFunctionOnNextCall(f30);
    f30();
    return v28;
}
Uint8Array.toString = f1;
const v34 = [0.8609274506895804,7.4865079355344e+307,132923.23387164436];
const v37 = Symbol.iterator;
const v39 = {
    [v37]() {
    },
};
v39.f = v39;
const v40 = new Date();
v40.setFullYear(v34, Uint8Array);
