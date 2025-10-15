function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4) {
    return SharedArrayBuffer;
}
F0[Symbol.toPrimitive] = f2;
try { F0.hasOwnProperty(F0); } catch (e) {}
