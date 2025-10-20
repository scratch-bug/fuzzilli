function f2() {
    return 129;
}
Date.valueOf = f2;
try {
    function f4() {
        return 750;
    }
    f4.valueOf = f4;
    class C5 extends f4 {
    }
    function f6() {
        return Date;
    }
    f6.maximum = Date;
    Object.defineProperty(f6, "initial", { value: C5 });
    const t16 = WebAssembly.Memory;
    new t16(f6);
} catch(e10) {
}
