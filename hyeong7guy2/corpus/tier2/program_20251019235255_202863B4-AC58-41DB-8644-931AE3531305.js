const v3 = Symbol.iterator;
const v28 = {
    [v3]() {
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            function f10() {
                function f11(a12) {
                    const v14 = d8.getExtrasBindingObject();
                    const v15 = v14.getContinuationPreservedEmbedderData(WeakSet);
                    const v16 = {};
                    v14.getContinuationPreservedEmbedderData();
                    eval(v15);
                    return eval;
                }
                f11.call();
                f11();
                %OptimizeMaglevOnNextCall(f11);
                return f11;
            }
            Object.defineProperty(this, "toString", { get: f10 });
        }
        const v22 = new F6();
        const t19 = v22.toString;
        t19();
        const v27 = {
            next() {
                return { done: 10 };
            },
        };
        return v27;
    },
};
const v31 = new Int16Array();
new Date(WeakSet, Date, 882, ...v31, ...v28);
