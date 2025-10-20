const v3 = Symbol.iterator;
const v12 = {
    [v3]() {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            function f9() {
                Symbol.iterator |= Date;
                return f9;
            }
            Object.defineProperty(this, "toString", { get: f9 });
        }
        const v10 = new F5();
        v10.toString;
    },
};
const v15 = new Int16Array();
function f16() {
    let v17;
    try { v17 = new Date(WeakSet, Date, 882, ...v15, ...v12); } catch (e) {}
    return v17;
}
f16();
%PrepareFunctionForOptimization(f16);
%OptimizeFunctionOnNextCall(f16);
f16();
