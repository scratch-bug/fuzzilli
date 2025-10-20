function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4) {
    return arguments;
}
const v6 = f2(F0, F0, F0);
Object.prototype.constructor.freeze(v6);
