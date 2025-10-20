const v3 = Symbol.iterator;
const v18 = {
    [v3]() {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            function f9() {
                function f10(a11) {
                    d8.getExtrasBindingObject(a8).setContinuationPreservedEmbedderData(a11);
                    return a8;
                }
                f10.apply(f9);
                return this;
            }
            Object.defineProperty(this, "toString", { get: f9 });
        }
        const v16 = new F5(F5, v3);
        v16.toString;
    },
};
const v21 = new Int16Array();
function f22() {
    for (let i25 = 0, i26 = 10; i26; i26--) {
    }
    try { new Date(WeakSet, Date, 882, ...v21, ...v18); } catch (e) {}
    return Int16Array;
}
f22();
%PrepareFunctionForOptimization(f22);
%OptimizeFunctionOnNextCall(f22);
f22();
