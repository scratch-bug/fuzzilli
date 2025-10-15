function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        d8.getExtrasBindingObject().getContinuationPreservedEmbedderData(a2, d8, d8, a2);
        return F0;
    }
    for (let i = 0; i < 5; i++) {
        f4(F0);
        %OptimizeFunctionOnNextCall(f4);
    }
}
new F0();
