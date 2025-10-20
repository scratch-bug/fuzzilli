function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = d8.getExtrasBindingObject();
            const v9 = v8.getContinuationPreservedEmbedderData();
            v9 ?? v9;
            const v11 = {};
            const v12 = v8.getContinuationPreservedEmbedderData();
            v12 ?? v12;
            eval();
            return this;
        }
        f5.call();
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v18 = new F0();
const t21 = v18.toString;
t21();
