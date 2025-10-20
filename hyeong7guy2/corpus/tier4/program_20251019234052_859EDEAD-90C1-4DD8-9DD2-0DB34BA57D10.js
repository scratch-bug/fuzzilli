function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0(F0);
Object.defineProperty(Object, "65536", v3);
