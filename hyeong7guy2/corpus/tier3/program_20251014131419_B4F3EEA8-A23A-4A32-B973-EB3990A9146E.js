const v2 = Array();
v2[80] = 10000n;
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = this.constructor;
    try { new v8(); } catch (e) {}
    v2["shift"]();
}
const v12 = new F3();
function f14() {
    return f14;
}
WebAssembly.instantiateStreaming(WebAssembly, v12, v12).catch(f14);
