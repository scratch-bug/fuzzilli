function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            return this;
        }
        const v8 = f6();
        try { v8.createExternalizableString(1024); } catch (e) {}
        return 1024;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v10 = new F1();
v10.toString;
