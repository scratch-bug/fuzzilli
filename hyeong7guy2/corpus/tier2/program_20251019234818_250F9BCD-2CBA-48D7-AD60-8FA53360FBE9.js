try {
    function f1() {
        return Symbol;
    }
    const v2 = Symbol.toPrimitive;
    f1[v2] = v2;
    class C3 extends f1 {
    }
    function f4() {
        return Symbol;
    }
    Object.defineProperty(f4, "initial", { value: C3 });
    const t12 = WebAssembly.Memory;
    new t12(f4);
} catch(e8) {
}
