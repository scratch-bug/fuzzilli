class C1 {
}
C1[Symbol.toPrimitive] = Symbol;
const v3 = new C1();
const v5 = new Date();
try { v5.setMinutes(v3, C1); } catch (e) {}
