function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10() {
            function f11(a12) {
                const v13 = f10[4];
                v13 | 7;
                d8.getExtrasBindingObject().setContinuationPreservedEmbedderData(7);
                return v13;
            }
            f11();
            f11();
            %OptimizeMaglevOnNextCall(f11);
            return f11;
        }
        Object.defineProperty(this, "toString", { get: f10 });
    }
    const v21 = new F6();
    const t19 = v21.toString;
    t19();
}
new F0();
