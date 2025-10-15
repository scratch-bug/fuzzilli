function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new WeakRef(F0);
v7.deref();
for (let i10 = 0; i10 < 25000; i10++) {
    const t6 = [];
    t6[0] = 0.18075778260729392;
}
gc();
