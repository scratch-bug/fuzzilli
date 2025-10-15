function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new WeakRef(F0);
v7.deref();
