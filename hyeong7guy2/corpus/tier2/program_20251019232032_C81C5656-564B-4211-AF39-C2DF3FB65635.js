function f1(a2) {
    function f5() {
        return Symbol;
    }
    WebAssembly.instantiateStreaming(WebAssembly, ArrayBuffer, a2).catch(f5);
    const v8 = new ArrayBuffer(a2);
    Object.defineProperty(DataView, Symbol.toPrimitive, { value: f1 });
    new DataView(v8, DataView);
}
try { f1(f1); } catch (e) {}
