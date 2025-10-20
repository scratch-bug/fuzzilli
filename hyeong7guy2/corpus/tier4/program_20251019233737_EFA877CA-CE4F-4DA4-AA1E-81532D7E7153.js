const v3 = Symbol.iterator;
const v11 = {
    [v3]() {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            F5 & v3;
        }
        new F5(F5, F5);
    },
};
const v14 = new Int16Array();
function f15() {
    try { new Date(WeakSet, Date, 882, ...v14, ...v11); } catch (e) {}
    return WeakSet;
}
f15();
%PrepareFunctionForOptimization(f15);
%OptimizeFunctionOnNextCall(f15);
f15();
