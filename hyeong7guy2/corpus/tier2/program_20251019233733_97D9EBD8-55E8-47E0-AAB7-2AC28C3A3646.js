const v2 = class extends Uint8ClampedArray {
    static [2452](a4, a5) {
        2452 instanceof a5;
    }
    e;
}
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = this.constructor;
    "NFC" === "function";
    function f19() {
        return 750;
    }
    f19[Symbol.toPrimitive] = f19;
    class C21 extends f19 {
    }
    function f22() {
    }
    f22.shared = "NFC";
    f22.maximum = 2624;
    Object.defineProperty(f22, "initial", { value: C21 });
    const t21 = WebAssembly.Memory;
    const v25 = new t21(f22);
    v25.toResizableBuffer();
    try { new v12(); } catch (e) {}
}
new F8();
