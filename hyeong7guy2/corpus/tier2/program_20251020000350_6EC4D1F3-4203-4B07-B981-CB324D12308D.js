const v1 = new Date();
try {
    function f3() {
        return 750;
    }
    f3.valueOf = f3;
    class C4 extends f3 {
    }
    function f5() {
        return f5;
    }
    f5.maximum = v1;
    Object.defineProperty(f5, "initial", { value: C4 });
    const t13 = WebAssembly.Memory;
    new t13(f5);
} catch(e9) {
}
