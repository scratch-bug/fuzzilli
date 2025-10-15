function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    gc();
    Object.create(Uint16Array);
}
const v9 = new F0(F0, F0);
new F0(F0, v9);
