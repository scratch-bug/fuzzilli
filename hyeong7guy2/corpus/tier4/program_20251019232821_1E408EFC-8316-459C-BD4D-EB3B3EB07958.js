function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4) {
    return {};
}
F0[Symbol.toPrimitive] = f2;
const v8 = class {
}
try { v8.__defineGetter__(F0, F0); } catch (e) {}
