function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        Symbol.iterator;
        function f13(a14) {
            const v16 = d8.getExtrasBindingObject();
            v16.d = v16;
            const v17 = v16.getContinuationPreservedEmbedderData();
            try { v17.hasOwnProperty(); } catch (e) {}
            try { v17.bind(); } catch (e) {}
            v16 ?? v16;
            v16.getContinuationPreservedEmbedderData();
            return v16;
        }
        f13().setContinuationPreservedEmbedderData(f13);
        f13(F6);
        %OptimizeMaglevOnNextCall(f13);
        return f13;
    }
    Object.defineProperty(this, "toString", { get: f10 });
}
F6.g = F6;
const v25 = new F6();
const v26 = v25.toString;
const v27 = v26(v25, v26, v26, v26, v26);
v27 ?? v27;
