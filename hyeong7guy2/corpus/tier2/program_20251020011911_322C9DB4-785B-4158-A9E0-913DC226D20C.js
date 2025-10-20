class C0 {
}
new C0();
for (let i3 = 0; i3 < 25000; ++i3) {
}
class C9 {
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    const v14 = this.constructor;
    function f19() {
        return 750;
    }
    const v20 = Symbol.toPrimitive;
    f19[v20] = f19;
    class C21 extends f19 {
    }
    let {"c":v22,"f":v23,"h":v24,...v25} = C9;
    const v31 = new ArrayBuffer(1, { maxByteLength: 4110001933 });
    const v33 = new Int8Array(v31);
    v33.reverse();
    function f35() {
        return v14;
    }
    f35.shared = "NFC";
    f35.maximum = 2624;
    Object.defineProperty(f35, "initial", { value: C21 });
    const t27 = WebAssembly.Memory;
    const v38 = new t27(f35);
    v38.toResizableBuffer(F10, "string", v20, C9);
    try { v14(); } catch (e) {}
}
function f41(a42) {
    function F43(a45, a46, a47) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const t36 = F43.constructor;
    const v49 = t36();
    v49 - v49;
    return C9;
}
f41();
f41();
new F10(F10, F10);
