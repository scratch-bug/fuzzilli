class C0 {
    p(a2) {
        function f3(a4) {
            const v5 = {};
            const v6 = {};
            return v5;
        }
        const v7 = {};
    }
}
function f8() {
    return C0;
}
const v10 = new Uint8Array();
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    function f17(a18, a19) {
        Reflect.apply(v10.toSorted, C0, f8);
        return a18;
    }
    this[Symbol.toPrimitive] = f17;
    try { this.propertyIsEnumerable(this); } catch (e) {}
}
new F11(Uint8Array, C0, f8, Uint8Array);
