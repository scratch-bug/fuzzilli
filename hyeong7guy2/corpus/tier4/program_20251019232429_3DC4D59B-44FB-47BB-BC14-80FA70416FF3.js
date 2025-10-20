class C0 {
    toString(a2, a3) {
        return this;
    }
}
class C4 extends C0 {
}
const v5 = new C4();
const v7 = this.Atomics;
try { v7.isLockFree(v5); } catch (e) {}
