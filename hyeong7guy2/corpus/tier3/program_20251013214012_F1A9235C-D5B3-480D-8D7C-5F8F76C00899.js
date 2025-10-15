class C1 extends Uint8Array {
}
const v2 = new C1();
const v3 = [v2,C1];
class C4 {
    static [v3];
}
