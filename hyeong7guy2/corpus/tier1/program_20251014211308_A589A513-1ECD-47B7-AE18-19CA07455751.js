function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        e = a7;
        try { e(); } catch (e) {}
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                return a2;
            }
            function f17(a18) {
                return f17;
            }
            Object.defineProperty(a13, "e", { get: f16, set: f17 });
        }
        const v19 = new F10(a5, this);
        return v19;
    }
    f4(a2, F0, f4);
}
new F0(F0, F0);
