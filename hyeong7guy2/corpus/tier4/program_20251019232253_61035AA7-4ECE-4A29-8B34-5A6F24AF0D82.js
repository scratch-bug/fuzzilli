function f4() {
}
WebAssembly.instantiateStreaming().catch(f4);
function f7() {
    return 1000000000.0;
}
ArrayBuffer.toString = f7;
const v8 = new ArrayBuffer(ArrayBuffer);
new DataView(v8);
