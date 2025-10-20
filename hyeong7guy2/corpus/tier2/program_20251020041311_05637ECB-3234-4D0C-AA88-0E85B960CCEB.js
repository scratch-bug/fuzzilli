function F3() {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = class extends F3 {
}
const v7 = Symbol.iterator;
const v32 = {
    [v7]() {
        function F10(a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                function f15(a16) {
                    const v18 = d8.getExtrasBindingObject();
                    v18.getContinuationPreservedEmbedderData();
                    const v20 = {};
                    v18.getContinuationPreservedEmbedderData();
                    eval();
                    return F10;
                }
                f15(f15.call());
                %OptimizeMaglevOnNextCall(f15);
                return f15;
            }
            Object.defineProperty(this, "toString", { get: f14 });
        }
        const v26 = new F10();
        const v27 = v26.toString;
        v27(WeakSet, Date, v27);
        const v31 = {
            next() {
                return { done: 10 };
            },
        };
        return v31;
    },
};
const v34 = new Int16Array();
new Date(WeakSet, Date, 882, ...v34, ...v32);
