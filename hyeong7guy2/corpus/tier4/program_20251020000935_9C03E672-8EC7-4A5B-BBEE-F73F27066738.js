let v0 = NaN;
class C1 {
    static {
        v0 |= v0;
    }
}
const v3 = new C1();
const v4 = v3.constructor;
function f5() {
    return C1;
}
const t11 = f5.constructor;
const v7 = t11(v4);
v7(C1, C1, v7, v4, v4);
