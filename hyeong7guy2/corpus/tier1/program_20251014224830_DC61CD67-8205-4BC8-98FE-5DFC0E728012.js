try {
    function f1() {
        return 750;
    }
    f1.valueOf = f1;
    class C2 extends f1 {
    }
    function f3() {
        return f1;
    }
    f3.shared = 750;
    Object.defineProperty(f3, "initial", { value: C2 });
    const t12 = WebAssembly.Memory;
    new t12(f3);
} catch(e7) {
}
