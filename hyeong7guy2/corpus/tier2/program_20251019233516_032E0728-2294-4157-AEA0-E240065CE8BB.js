class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    function f10() {
        return 750;
    }
    const v11 = Symbol.toPrimitive;
    f10[v11] = f10;
    class C12 extends f10 {
    }
    let {"c":v13,"f":v14,"h":v15,...v16} = C0;
    typeof Symbol === "string";
    function f20() {
        return v5;
    }
    f20.shared = "NFC";
    f20.maximum = 2624;
    Object.defineProperty(f20, "initial", { value: C12 });
    const t20 = WebAssembly.Memory;
    const v23 = new t20(f20);
    v23.toResizableBuffer(F1, "string", v11, C0);
    try { new v5(); } catch (e) {}
}
new F1(F1, F1);
