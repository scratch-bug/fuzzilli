const v0 = class {
}
function f1() {
    class C3 extends ArrayBuffer {
    }
    new C3();
}
v0[Symbol.toPrimitive] = f1;
class C7 extends v0 {
    [v0](a9, a10, a11, a12) {
    }
}
