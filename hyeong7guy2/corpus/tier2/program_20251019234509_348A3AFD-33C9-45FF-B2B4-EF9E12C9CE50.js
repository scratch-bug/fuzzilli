const v3 = Reflect.construct(Proxy, [Reflect,Reflect]);
const v4 = v3.preventExtensions(Reflect);
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function F10(a12, a13, a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
        function f16() {
            return F5;
        }
        function f17(a18) {
            const v19 = { ...v3 };
            return Proxy;
        }
        Object.defineProperty(this, "e", { get: f16, set: f17 });
        this.e = -1;
    }
    new F10(Proxy, v4, v4, v3);
}
new F5(v4, v3);
