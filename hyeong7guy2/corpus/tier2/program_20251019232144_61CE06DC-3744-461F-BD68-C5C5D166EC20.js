function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            this.f = "NFC";
            return "NFC";
        }
        const v8 = {};
        v8.set = f5;
        const v10 = new Proxy(this, v8);
        try { v10.toString(); } catch (e) {}
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v12 = new F1();
Object.defineProperty(v12, "f", { value: v12 });
v12.toString();
