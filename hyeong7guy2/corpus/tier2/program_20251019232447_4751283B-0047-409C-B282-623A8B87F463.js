try {
    const v2 = Symbol.iterator;
    const v24 = {
        [v2]() {
            gc();
            const v8 = Symbol.iterator;
            const v16 = {
                [v8]() {
                    const v15 = {
                        next() {
                            try {
                                super.toISOString(this);
                            } catch(e13) {
                            }
                            return { done: Object };
                        },
                    };
                    return v15;
                },
            };
            function f18() {
                let v19;
                try { v19 = new Date(WeakSet, Date, 882, ...v16, ...v16); } catch (e) {}
                return v19;
            }
            f18.call(Date);
            const v23 = {
                next() {
                    return { done: 10 };
                },
            };
            return v23;
        },
    };
    const v27 = new Int16Array(v24, 882, 882);
    function f28() {
        try { new Date(Symbol, Date, 882, ...v27, ...v24); } catch (e) {}
        return Int16Array;
    }
    f28();
    %PrepareFunctionForOptimization(f28);
    %OptimizeFunctionOnNextCall(f28);
    f28();
} catch(e32) {
}
