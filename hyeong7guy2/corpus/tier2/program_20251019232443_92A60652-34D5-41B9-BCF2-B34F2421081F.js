function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = {};
    try {
        new F0(this, v4);
    } catch(e6) {
        try { v4["getPrototypeOf"](); } catch (e) {}
        function F9(a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            function F14(a16, a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                function f20() {
                    return F14;
                }
                function f21(a22) {
                    return a3;
                }
                Object.defineProperty(this, "e", { get: f20, set: f21 });
                this.e = 2147483647;
            }
            new F14();
        }
        new F9();
    }
}
new F0(F0, F0);
