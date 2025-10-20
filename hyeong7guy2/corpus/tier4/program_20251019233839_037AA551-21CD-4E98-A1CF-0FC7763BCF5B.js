class C0 {
}
const v2 = new WeakRef(C0);
gc(v2.deref());
