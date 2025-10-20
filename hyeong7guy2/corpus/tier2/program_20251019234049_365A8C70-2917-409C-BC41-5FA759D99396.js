function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = this.constructor;
    function f9() {
        return 750;
    }
    f9[Symbol.toPrimitive] = f9;
    class C11 extends f9 {
    }
    function f12() {
        return "NFC";
    }
    f12.shared = "NFC";
    f12.maximum = 2624;
    Object.defineProperty(f12, "initial", { value: C11 });
    const t15 = WebAssembly.Memory;
    const v15 = new t15(f12);
    v15.toResizableBuffer();
    try { new v4(F0); } catch (e) {}
}
new F0(F0, F0);
