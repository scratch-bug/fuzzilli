const v4 = Symbol.iterator;
const v18 = {
    [v4]() {
        function f7(a8) {
            f7[4] | 7;
            (["NFD"]).push(true);
            return Symbol;
        }
        f7();
        const v17 = {
            next() {
                return { done: "NFD" };
            },
        };
        return v17;
    },
};
function f20() {
    const v21 = new Date(WeakSet, Date, 882, ...v18, ...v18);
    return v21;
}
f20();
%PrepareFunctionForOptimization(f20);
%OptimizeMaglevOnNextCall(f20);
f20();
