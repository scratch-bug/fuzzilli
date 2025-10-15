function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new Date();
v3.toLocaleString(F0);
