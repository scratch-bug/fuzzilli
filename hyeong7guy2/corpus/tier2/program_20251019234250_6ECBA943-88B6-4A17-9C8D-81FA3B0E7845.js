function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = f4[4];
            v7 | 7;
            d8.getExtrasBindingObject().getContinuationPreservedEmbedderData();
            return v7;
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v15 = new F0();
const t17 = v15.toString;
t17();
