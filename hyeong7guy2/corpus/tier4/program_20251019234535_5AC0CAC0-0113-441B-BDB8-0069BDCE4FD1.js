const v0 = class {
}
function f1() {
    return v0;
}
class C3 extends f1 {
    #valueOf(a5, a6) {
    }
}
new C3();
try { Reflect.construct(C3, Int8Array); } catch (e) {}
