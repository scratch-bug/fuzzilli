const v2 = new Uint8ClampedArray(137);
try {
    function f3() {
        v2.fill();
        return Uint8ClampedArray;
    }
    f3.valueOf = f3;
    class C5 extends f3 {
    }
    function f6() {
        return f3;
    }
    Object.defineProperty(f6, "initial", { value: C5 });
    const t13 = WebAssembly.Memory;
    new t13(f6);
} catch(e10) {
}
