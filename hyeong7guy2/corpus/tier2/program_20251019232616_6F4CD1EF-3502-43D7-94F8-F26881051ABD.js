const v3 = Symbol.iterator;
const v15 = {
    [v3]() {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            function f9() {
                return Float64Array instanceof Symbol.hasInstance;
            }
            Object.defineProperty(this, "toString", { get: f9 });
        }
        const v13 = new F5(v3, F5);
        v13.toString;
    },
};
const v18 = new Int16Array();
function f19() {
    let v20;
    try { v20 = new Date(WeakSet, Date, 882, ...v18, ...v15); } catch (e) {}
    return v20;
}
f19();
%PrepareFunctionForOptimization(f19);
%OptimizeFunctionOnNextCall(f19);
f19();
