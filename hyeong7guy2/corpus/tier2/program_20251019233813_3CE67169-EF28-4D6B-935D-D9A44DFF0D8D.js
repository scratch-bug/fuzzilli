let v0 = 1676310533;
const v3 = Symbol.iterator;
const v9 = {
    [v3]() {
        v0--;
        const v8 = {
            next() {
                return { done: v0 };
            },
        };
        return v8;
    },
};
const v12 = new Int16Array();
function f13() {
    const v14 = new Date(Symbol, Date, 882, ...v12, ...v9);
    try { v14.getUTCHours(); } catch (e) {}
    return v3;
}
f13();
%PrepareFunctionForOptimization(f13);
%OptimizeFunctionOnNextCall(f13);
f13();
