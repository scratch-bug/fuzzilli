const v3 = [BigUint64Array,Reflect];
const v4 = Reflect.construct(Proxy, v3);
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function F10(a12, a13, a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
        function f16() {
            return a14;
        }
        function f17(a18) {
            const v19 = { ...v4 };
            return v3;
        }
        Object.defineProperty(this, "e", { get: f16, set: f17 });
        this.e = -1;
    }
    new F10();
}
new F5(v4, BigUint64Array);
