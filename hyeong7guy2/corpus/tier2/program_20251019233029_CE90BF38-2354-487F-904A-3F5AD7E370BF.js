function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                return f9;
            }
            const v11 = {};
            v11.getPrototypeOf = f9;
            function f12(a13, a14) {
                a13 instanceof f8;
            }
            v11.set = f12;
            const v17 = new Proxy(this, v11);
            v17.length = v17;
            try { v17.toString(); } catch (e) {}
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v19 = new F4();
    v19.toString(a3, v19, F4);
}
new F0();
