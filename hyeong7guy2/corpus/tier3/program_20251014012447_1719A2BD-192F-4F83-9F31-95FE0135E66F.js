const v2 = Array(127);
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    a6[66] = a7;
    v2["shift"]();
}
const v10 = new F3(127, v2);
function f12() {
    return F3;
}
WebAssembly.instantiateStreaming(v2, v2, v10).catch(f12);
