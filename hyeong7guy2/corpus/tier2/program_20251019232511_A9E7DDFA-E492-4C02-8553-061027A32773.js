function f1(a2) {
    const v4 = new ArrayBuffer();
    function f5() {
        return f5;
    }
    Object.defineProperty(v4, "constructor", { configurable: true, get: f5 });
    v4.slice();
    Object.defineProperty(DataView, Symbol.toPrimitive, { value: f1 });
    new DataView(v4, DataView);
    return f1;
}
try { f1(); } catch (e) {}
