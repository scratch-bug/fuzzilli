const v0 = `
    const v5 = Symbol.iterator;
    const v11 = {
        [v5]() {
            const v10 = {
                next() {
                    return { done: 10 };
                },
            };
            return v10;
        },
    };
    const v13 = new Int16Array();
    function f14() {
        try { new Date(WeakSet, Date, 882, ...v13, ...v11); } catch (e) {}
        return v0;
    }
    f14();
    %PrepareFunctionForOptimization(f14);
    %OptimizeFunctionOnNextCall(f14);
    f14();
`;
eval(v0);
