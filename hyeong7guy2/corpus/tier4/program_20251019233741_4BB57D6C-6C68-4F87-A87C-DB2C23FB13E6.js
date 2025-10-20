function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7) {
        return globalThis.console.trace();
    }
    this.toString = f6;
}
const v11 = new F0(F0, F0, F0, F0);
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
}
const v16 = new F12(v11, F12);
v16.length = v11;
const v17 = [F12];
v17.parameters = v16;
const v19 = WebAssembly.Tag;
try { new v19(v17); } catch (e) {}
