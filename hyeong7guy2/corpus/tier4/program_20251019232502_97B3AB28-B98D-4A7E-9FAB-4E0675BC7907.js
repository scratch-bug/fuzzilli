function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = class {
}
const v3 = [F0,v2];
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    v3.includes(a8, WeakMap);
}
new F5();
