class C2 {
}
class C3 extends C2 {
}
C3.constructor = Date;
const v4 = C3.constructor;
try { new v4(26227n); } catch (e) {}
