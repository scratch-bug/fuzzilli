function f2() {
    return f2;
}
Date[Symbol.toPrimitive] = f2;
class C5 extends Date {
}
const v6 = new C5();
try { v6.setHours(6, C5); } catch (e) {}
