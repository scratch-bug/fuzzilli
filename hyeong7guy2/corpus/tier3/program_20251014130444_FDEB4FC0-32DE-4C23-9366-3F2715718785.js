function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    class C8 extends Uint16Array {
        1073741823 = "object";
    }
    class C9 extends C8 {
    }
    new C9();
}
try { new F2("object", "object", F2, Uint16Array); } catch (e) {}
