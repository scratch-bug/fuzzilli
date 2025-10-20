class C1 extends Int8Array {
}
const v2 = new C1();
const v4 = Intl.Locale;
try { new v4(v2); } catch (e) {}
