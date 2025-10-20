function f1() {
    return f1;
}
const v4 = WebAssembly.compileStreaming().then(Uint32Array, f1);
for (let v6 = 0; v6 < 5; v6++) {
    gc({ execution: "async" });
    const v49 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,v6,3,16,109,112,0,0,7,10,1,6,v6,101,95,v6,120,112,0,0]);
    WebAssembly.compile(v49);
}
function f51() {
    return 16;
}
WebAssembly.instantiateStreaming(v4).catch(f51);
