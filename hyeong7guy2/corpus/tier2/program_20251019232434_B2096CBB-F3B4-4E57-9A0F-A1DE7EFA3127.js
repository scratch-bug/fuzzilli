function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    this.constructor;
    function f9() {
        return 750;
    }
    f9[Symbol.toPrimitive] = f9;
    class C11 extends f9 {
    }
    function F12() {
        if (!new.target) { throw 'must be called with new'; }
    }
    ("n").match(F12);
    function f16() {
        return F12;
    }
    f16.shared = "NFC";
    f16.maximum = 2624;
    Object.defineProperty(f16, "initial", { value: C11 });
    const t19 = WebAssembly.Memory;
    new t19(f16);
}
new F0(F0, F0);
for (let v22 = 0; v22 < 1000; v22++) {
    function F23() {
        if (!new.target) { throw 'must be called with new'; }
        new SharedArrayBuffer(128, { value: 0, maxByteLength: 2147483649 });
    }
    new F23();
}
