const v3 = Symbol.iterator;
const v10 = {
    [v3]() {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F5();
    },
};
const v13 = new Int16Array(Symbol, 882, 882);
function f14() {
    new Int16Array("318627056");
    try { new Date(WeakSet, Date, 882, ...v13, ...v10); } catch (e) {}
    return WeakSet;
}
f14();
%PrepareFunctionForOptimization(f14);
%OptimizeFunctionOnNextCall(f14);
f14();
