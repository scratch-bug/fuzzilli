try {
    function f1() {
        return 750;
    }
    const v3 = Symbol.toPrimitive;
    Object.defineProperty(f1, v3, { writable: true, configurable: true, value: f1 });
    class C4 extends f1 {
    }
    function f5() {
        return C4;
    }
    f5.maximum = v3;
    Object.defineProperty(f5, "initial", { value: C4 });
    const t13 = WebAssembly.Memory;
    new t13(f5);
} catch(e9) {
}
