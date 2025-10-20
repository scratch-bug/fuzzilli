try {
    function F0(a2, a3) {
        if (!new.target) { throw 'must be called with new'; }
        function f4() {
            function f5(a6) {
                let v8;
                try { v8 = d8.getExtrasBindingObject(F0, f5); } catch (e) {}
                try { v8.setContinuationPreservedEmbedderData(f5); } catch (e) {}
                let v10;
                try { v10 = v8.getContinuationPreservedEmbedderData(); } catch (e) {}
                try { v10(); } catch (e) {}
                return F0;
            }
            try { f5(); } catch (e) {}
            try { f5(); } catch (e) {}
            return f5;
        }
        Object.defineProperty(this, "toString", { get: f4 });
    }
    let v14;
    try { v14 = new F0(); } catch (e) {}
    const v15 = v14?.toString;
    try { v15(); } catch (e) {}
} catch(e17) {
}
