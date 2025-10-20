function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new Date(F0);
v3.setMilliseconds(F0);
