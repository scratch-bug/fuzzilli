function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7) {
        return a7;
    }
    function f8(a9, a10) {
        return a10;
    }
    const t8 = WebAssembly.Suspending;
    const v13 = new t8(f8);
    Object.defineProperty(v13, "constructor", { writable: true, value: f5 });
    for (const v17 in [0,-2147483649]) {
        gc(gc);
    }
}
new F0();
