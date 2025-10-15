function f1() {
    return Uint8Array;
}
class C2 extends f1 {
}
const v4 = Symbol.iterator;
class C5 extends Uint8Array {
    [v4] = C2;
}
new C5();
