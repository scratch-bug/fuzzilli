const v3 = Symbol.iterator;
const v18 = {
    [v3]() {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            function f9() {
                function f10(a11) {
                    return a7;
                }
                const v12 = f10.apply();
                v12[Symbol.hasInstance] = f10;
                return Float64Array instanceof v12;
            }
            Object.defineProperty(this, "toString", { get: f9 });
        }
        const v16 = new F5(this);
        v16.toString;
    },
};
const v21 = new Int16Array();
function f22() {
    try { new Date(WeakSet, Date, 882, ...v21, ...v18); } catch (e) {}
    return v18;
}
f22();
%PrepareFunctionForOptimization(f22);
%OptimizeFunctionOnNextCall(f22);
f22();
