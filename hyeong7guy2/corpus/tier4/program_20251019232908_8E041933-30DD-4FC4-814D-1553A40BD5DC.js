class C1 extends Date {
}
const v2 = new C1();
v2.setUTCSeconds(v2);
v2.toISOString();
