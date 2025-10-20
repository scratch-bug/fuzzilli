function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
F0++;
const v5 = new Uint16Array(3);
v5.indexOf(F0);
