const v4 = Symbol.iterator;
const v21 = {
    [v4]() {
        const v12 = {
            valueOf() {
                return this;
            },
            construct(a8, a9) {
                return Symbol;
            },
            next() {
                return { done: "NFD" };
            },
        };
        function f13() {
            const t12 = Temporal.PlainDate;
            const v18 = new t12(15, 5, 5);
            v18.equals(v12);
            return 15;
        }
        try { f13.apply(); } catch (e) {}
        return v12;
    },
};
function f23() {
    const v24 = new Date(WeakSet, Date, 882, ...v21, ...v21);
    return v24;
}
f23();
%PrepareFunctionForOptimization(f23);
%OptimizeMaglevOnNextCall(f23);
f23();
