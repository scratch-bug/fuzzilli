const v1 = Symbol.iterator;
const v5 = Symbol.iterator;
const v17 = {
    [v5]() {
        function f7(a8, a9, a10) {
            return a10;
        }
        let v12;
        try { v12 = Promise.bind(v1); } catch (e) {}
        try { v12(Symbol, Date); } catch (e) {}
        const v16 = {
            next() {
                return { done: f7 };
            },
        };
        return v16;
    },
};
const v19 = new Int16Array();
function f20() {
    const v21 = new Date(WeakSet, Date, 882, ...v19, ...v17);
    return v21;
}
f20();
%PrepareFunctionForOptimization(f20);
%OptimizeFunctionOnNextCall(f20);
f20();
