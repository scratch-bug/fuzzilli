const v1 = Symbol.iterator;
class C3 extends Date {
}
const v4 = new C3();
try { v4.setUTCDate(v1); } catch (e) {}
