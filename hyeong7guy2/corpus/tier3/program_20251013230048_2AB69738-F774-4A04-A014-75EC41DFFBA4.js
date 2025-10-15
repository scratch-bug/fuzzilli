Int32Array.toString = Date;
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
}
const v11 = F7.constructor;
try { v11(Int32Array, F2); } catch (e) {}
