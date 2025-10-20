function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = [F1];
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    v3.includes(a8, WeakMap);
}
new F5(null, WeakMap);
