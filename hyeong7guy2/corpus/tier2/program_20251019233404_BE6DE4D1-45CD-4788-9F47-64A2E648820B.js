class C1 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v10 = d8.getExtrasBindingObject();
            v10.getContinuationPreservedEmbedderData();
            v10.getContinuationPreservedEmbedderData();
            eval();
        }
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v16 = new F2();
v16.toString;
("4294967297")[v16];
