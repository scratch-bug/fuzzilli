function f0() {
}
class C1 extends f0 {
    static valueOf(a3) {
        super.length /= a3;
    }
}
const v4 = new C1();
C1.__proto__ = v4;
try {
    C1.valueOf(f0);
} catch(e6) {
}
