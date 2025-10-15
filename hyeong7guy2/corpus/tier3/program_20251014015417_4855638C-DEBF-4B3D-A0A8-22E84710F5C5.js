function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
}
gc.toString = gc;
v3[gc] = "major";
