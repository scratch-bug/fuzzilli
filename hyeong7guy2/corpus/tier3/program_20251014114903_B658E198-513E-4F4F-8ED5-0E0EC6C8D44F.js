function f0() {
    return f0;
}
class C2 extends f0 {
}
const v5 = new ArrayBuffer(11);
v5.slice(C2, 10);
