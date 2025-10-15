function f1() {
    class C2 {
        static {
        }
    }
    ("").trimStart();
    eval();
    try { C2(); } catch (e) {}
}
for (let v9 = 0; v9 < 100; v9++) {
    f1.call();
    v9 >>> v9;
}
