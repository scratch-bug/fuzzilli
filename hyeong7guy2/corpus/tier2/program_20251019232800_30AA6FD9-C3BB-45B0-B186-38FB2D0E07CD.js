function f0() {
    return f0;
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            this.f = "NFC";
            return f7;
        }
        const v11 = new Proxy(this, { getOwnPropertyDescriptor: f0 });
        try { v11.toString(f0, v11, v11, v11, a4); } catch (e) {}
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v13 = new F2();
v13.toString();
