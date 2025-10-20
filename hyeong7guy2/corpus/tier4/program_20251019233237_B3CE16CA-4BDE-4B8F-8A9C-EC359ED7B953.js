const t0 = Array.prototype;
t0[4] = Array;
const v3 = Array(Array);
v3[104] = 694.5967847510485;
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = this.constructor;
    try { new v9(a6, a7, v9, v9); } catch (e) {}
    v3["shift"]();
}
new F4();
function f15() {
    return Array;
}
WebAssembly.instantiateStreaming().catch(f15);
