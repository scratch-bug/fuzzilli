function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        e = a7;
        function f9(a10, a11, a12) {
            return a11;
        }
        f9(e);
        function F14(a16, a17, a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            function f20() {
                return f20;
            }
            function f21(a22) {
                return a22;
            }
            Object.defineProperty(a17, "e", { get: f20, set: f21 });
        }
        new F14(a5, this);
        return a6;
    }
    f4(a2, F0, f4);
}
new F0();
new F0();
