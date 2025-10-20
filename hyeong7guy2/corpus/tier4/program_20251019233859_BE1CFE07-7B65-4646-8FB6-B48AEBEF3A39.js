function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = F0.__defineGetter__;
function f5() {
    return F0;
}
f5.address = v4;
const v7 = WebAssembly.Memory;
try { new v7(f5); } catch (e) {}
