const v3 = Symbol.iterator;
const v24 = {
    [v3]() {
        const t0 = Temporal.Duration;
        const v7 = new t0();
        try { v7.round(); } catch (e) {}
        new WeakSet();
        new ArrayBuffer(4, { maxByteLength: 16 });
        new Int16Array();
        let v17 = 10;
        v17--;
        const v23 = {
            next() {
                const v20 = { done: v17 };
                const v21 = class {
                }
                v21[Symbol.toPrimitive] = Symbol;
                return v20;
            },
        };
        return v23;
    },
};
const v27 = new Int16Array(Symbol, 882, 882);
function f28() {
    new Date(WeakSet, Date, 882, ...v27, ...v24);
    return Symbol;
}
f28();
%PrepareFunctionForOptimization(f28);
%OptimizeFunctionOnNextCall(f28);
f28();
