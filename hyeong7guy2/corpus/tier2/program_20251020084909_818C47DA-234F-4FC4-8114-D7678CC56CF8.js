const v3 = Symbol.iterator;
const v31 = {
    [v3]() {
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            function f10() {
                function f11(a12) {
                    const v14 = d8.getExtrasBindingObject(Date, WeakSet);
                    v14.getContinuationPreservedEmbedderData(10, this, f11);
                    function F16(a18) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    const v19 = class extends F16 {
                    }
                    v14.getContinuationPreservedEmbedderData();
                    eval();
                    return WeakSet;
                }
                f11.call();
                f11(this);
                %OptimizeMaglevOnNextCall(f11);
                return f11;
            }
            Object.defineProperty(this, "toString", { get: f10 });
        }
        const v25 = new F6();
        const t23 = v25.toString;
        t23(F6);
        const v30 = {
            next() {
                return { done: 10 };
            },
        };
        return v30;
    },
};
const v34 = new Int16Array(v31, 882);
new Date(WeakSet, Date, 882, ...v34, ...v31);
