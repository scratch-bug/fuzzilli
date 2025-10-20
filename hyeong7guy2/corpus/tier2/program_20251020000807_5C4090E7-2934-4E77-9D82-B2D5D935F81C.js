function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f8() {
                return f8;
            }
            const v9 = class extends f8 {
            }
            function f10(a11) {
                const v12 = Symbol(a11);
                v12.__defineGetter__(v9, f10);
                return v12;
            }
            f10(v9);
            return f6;
        }
        f6.call();
        f6(this);
        try { Uint8Array.fromBase64("🙌🏿"); } catch (e) {}
        return Symbol;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v20 = new F1();
v20.toString;
