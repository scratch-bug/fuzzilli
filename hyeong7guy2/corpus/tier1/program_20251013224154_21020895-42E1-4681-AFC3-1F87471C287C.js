function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = this.constructor;
    try { new v4(); } catch (e) {}
    this.h = a2;
}
new F0(F0, F0);
new F0();
function f8(a9) {
    return gc({ execution: "async" });
}
class C14 extends f8 {
}
function F15(a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    new C14();
}
new F15();
