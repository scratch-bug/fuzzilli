function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        const v5 = {};
        v5.getOwnPropertyDescriptor = this;
        const v7 = new Proxy(this, v5);
        try { v7.toString(); } catch (e) {}
        for (const v9 in v7) {
        }
        return Proxy;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v10 = new F0();
try { v10.toString(F0, v10, v10); } catch (e) {}
