function f1() {
    return f1;
}
class C2 extends f1 {
    static {
        eval(C2);
    }
}
for (let i6 = 246; i6 < 20000; ++i6) {
}
