function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
F0 >>>= F0;
const v4 = new Uint32Array(4);
v4.includes(F0);
