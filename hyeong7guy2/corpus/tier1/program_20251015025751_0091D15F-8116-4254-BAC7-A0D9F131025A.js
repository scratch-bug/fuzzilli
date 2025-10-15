function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v9 = d8.getExtrasBindingObject(a2, f5, f5, f5, a3).getContinuationPreservedEmbedderData();
            v9 ?? v9;
            return a2;
        }
        f5(f5(f5));
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v13 = new F0();
const v14 = v13.toString;
v14(v13, v13, v14, v13);
