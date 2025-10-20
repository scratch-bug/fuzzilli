const v3 = class {
}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = this.constructor;
    function f13() {
        return 750;
    }
    f13[Symbol.toPrimitive] = f13;
    class C15 extends f13 {
    }
    function f16() {
        return F5;
    }
    f16.shared = "NFC";
    f16.maximum = 2624;
    Object.defineProperty(f16, "initial", { value: C15 });
    ("NFC")["startsWith"](v3, Uint8ClampedArray, ..."startsWith", ..."startsWith");
    const t17 = WebAssembly.Memory;
    const v21 = new t17(f16);
    try { new v9(); } catch (e) {}
    Array[-1] >>>= v21;
}
new F5();
