function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            return f5;
        }
        const v7 = {};
        function f8() {
            return f5;
        }
        Object.defineProperty(v7, "isExtensible", { get: f8 });
        v7.getPrototypeOf = f5;
        function f9(a10, a11) {
            a10 instanceof f4;
        }
        v7.set = f9;
        const v14 = new Proxy(this, v7);
        v14.length = v14;
        try { v14.toString(); } catch (e) {}
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v16 = new F0();
v16.toString(v16, v16, v16);
