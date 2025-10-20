const v1 = [-16,-256,268435441,16];
class C2 {
}
const v6 = Symbol.iterator;
const v19 = {
    [v6]() {
        function f8(a9, a10, a11) {
            a9[1];
            a10[1];
            a10[1] = this;
            return a10;
        }
        f8(v1, v1);
        f8(C2, Symbol);
        const v18 = {
            next() {
                return { done: f8 };
            },
        };
        return v18;
    },
};
const v21 = new Int16Array();
function f22() {
    const v23 = new Date(WeakSet, Date, 882, ...v21, ...v19);
    return v23;
}
f22();
%PrepareFunctionForOptimization(f22);
%OptimizeFunctionOnNextCall(f22);
f22();
