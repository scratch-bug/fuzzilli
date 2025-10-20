function f1(a2) {
    function f5() {
        return f5;
    }
    WebAssembly.instantiateStreaming().catch(f5);
    const v8 = new ArrayBuffer();
    Object.defineProperty(DataView, Symbol.toPrimitive, { value: f1 });
    try { new DataView(v8, DataView); } catch (e) {}
}
f1();
