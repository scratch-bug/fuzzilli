const v1 = class extends Uint16Array {
}
class C2 extends v1 {
}
const v3 = new C2();
function f4() {
    return v3;
}
f4.apply(C2, v3);
