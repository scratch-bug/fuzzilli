function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    let v4 = 7;
    v4++;
    const v6 = new ArrayBuffer(v4);
    v6.slice(a2, a2);
}
const v8 = new F0();
function f9() {
    return v8;
}
WebAssembly.instantiateStreaming().catch(f9);
