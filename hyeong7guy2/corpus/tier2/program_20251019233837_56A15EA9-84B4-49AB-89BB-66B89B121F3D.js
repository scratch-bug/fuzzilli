const v4 = Symbol.iterator;
const v29 = {
    [v4]() {
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            function f11() {
                function f12(a13) {
                    const v15 = d8.getExtrasBindingObject();
                    v15.getContinuationPreservedEmbedderData();
                    const v17 = {};
                    v15.getContinuationPreservedEmbedderData();
                    eval();
                    return v15;
                }
                f12.call();
                f12();
                %OptimizeMaglevOnNextCall(f12);
                return f12;
            }
            Object.defineProperty(this, "toString", { get: f11 });
        }
        const v23 = new F7(Date, this);
        const t19 = v23.toString;
        t19();
        const v28 = {
            next() {
                return { done: 10 };
            },
        };
        return v28;
    },
};
const v32 = new Int16Array(Symbol);
new Date(WeakSet, Date, 882, ...v32, ...v29);
