const v0 = [-16,-256,268435441,16];
class C1 {
}
const v6 = Symbol.iterator;
const v19 = {
    [v6]() {
        function f8(a9, a10, a11) {
            a10[1] = a10;
            const v12 = a10.name;
            v12.fontcolor(a11, C1, f8, v6);
            return v12;
        }
        try { f8(v0, v0); } catch (e) {}
        f8(C1, Symbol);
        const v18 = {
            next() {
                return { done: f8 };
            },
        };
        return v18;
    },
};
const v21 = new Int16Array(v0, 882, 882);
function f22() {
    const v23 = new Date(WeakSet, Date, 882, ...v21, ...v19);
    return v23;
}
f22();
%PrepareFunctionForOptimization(f22);
%OptimizeFunctionOnNextCall(f22);
f22();
