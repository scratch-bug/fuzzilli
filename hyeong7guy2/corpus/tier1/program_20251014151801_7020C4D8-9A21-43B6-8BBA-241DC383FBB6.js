function f0() {
    const v4 = Symbol.iterator;
    const v10 = {
        [v4]() {
            this.b = this;
            const v9 = {
                next() {
                    return { done: 10 };
                },
            };
            return v9;
        },
    };
    const v13 = new Int16Array();
    function f14() {
        const v15 = new Date(WeakSet, Date, 882, ...v13, ...v10);
        return v15;
    }
    f14();
    %PrepareFunctionForOptimization(f14);
    %OptimizeFunctionOnNextCall(f14);
    f14();
    return f0;
}
const v18 = class extends f0 {
}
new v18();
new v18();
