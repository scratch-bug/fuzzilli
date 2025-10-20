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
                const v13 = Symbol.hasInstance;
                f10 |= f10;
                v12[v13] = f10;
                Float64Array instanceof v12;
                return f9;
            }
            Object.defineProperty(this, "toString", { get: f9 });
        }
        const v16 = new F5(this);
        v16.toString;
    },
};
const v21 = new Int16Array();
function f22() {
    let v23;
    try { v23 = new Date(WeakSet, Date, 882, ...v21, ...v18); } catch (e) {}
    return v23;
}
f22();
%PrepareFunctionForOptimization(f22);
%OptimizeFunctionOnNextCall(f22);
f22();
