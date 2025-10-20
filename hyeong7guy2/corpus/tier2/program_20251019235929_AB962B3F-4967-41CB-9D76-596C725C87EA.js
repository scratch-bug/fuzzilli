class C0 {
}
new WeakMap();
[1e-15,0.6919487808574489];
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = this.constructor;
    function f13() {
        return 750;
    }
    f13[Symbol.toPrimitive] = f13;
    class C15 extends f13 {
    }
    function f16() {
        return "NFC";
    }
    f16.shared = "NFC";
    f16.maximum = 2624;
    Object.defineProperty(f16, "initial", { value: C15 });
    const t19 = WebAssembly.Memory;
    const v19 = new t19(f16);
    v19.toResizableBuffer();
    try { new v8(); } catch (e) {}
}
new F4();
