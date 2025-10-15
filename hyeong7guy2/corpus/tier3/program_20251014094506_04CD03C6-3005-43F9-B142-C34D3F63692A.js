function f1() {
    return f1;
}
class C2 extends f1 {
}
try { JSON.parse(C2, "4X"); } catch (e) {}
