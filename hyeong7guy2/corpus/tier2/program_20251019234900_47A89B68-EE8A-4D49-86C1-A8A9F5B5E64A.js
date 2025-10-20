function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        try { this.createExternalizableString(a3); } catch (e) {}
        return F1;
    }
    f5.call();
    Object.defineProperty(this, "toString", { get: f5 });
}
const v8 = new F1();
const t10 = v8.toString;
new t10("b");
