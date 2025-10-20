function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = new WeakRef(F2);
v9.deref();
gc({ execution: "async" });
