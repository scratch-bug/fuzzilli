function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = d8.getExtrasBindingObject(d8, a2, d8, d8, f4);
            v8.getContinuationPreservedEmbedderData();
            const v11 = new Int16Array(a2, v8, a2);
            function F12(a14, a15, a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                this.propertyIsEnumerable(v11);
            }
            return v8.getContinuationPreservedEmbedderData(F12, F0, v8);
        }
        f5(this);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v22 = new F0();
const v23 = v22.toString;
v23(v22, v23, v22, v23, v22);
