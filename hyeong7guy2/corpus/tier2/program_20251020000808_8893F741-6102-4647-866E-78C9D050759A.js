let v0 = 2741;
function f2(a3) {
    function f6(a7, a8) {
        const v11 = {
            ...a8,
            get c() {
                return ++v0;
            },
        };
        return v11;
    }
    f6("symbol", f6(f6, f6));
    function f15() {
        return f6;
    }
    WebAssembly.instantiateStreaming().catch(f15);
    const v18 = new ArrayBuffer(a3, ArrayBuffer);
    Object.defineProperty(DataView, Symbol.toPrimitive, { value: f2 });
    const v36 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,v0,v0,0,1,127]);
    WebAssembly.validate(v36);
    new DataView(v18, DataView);
    return DataView;
}
try { f2(); } catch (e) {}
