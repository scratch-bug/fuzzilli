class C0 {
}
class C1 extends C0 {
}
function f2(a3) {
    return C0;
}
C1.toString = f2;
try { this.encodeURIComponent(C1); } catch (e) {}
