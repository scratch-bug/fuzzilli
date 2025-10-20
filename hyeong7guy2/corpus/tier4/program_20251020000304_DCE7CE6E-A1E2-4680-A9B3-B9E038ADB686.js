class C1 extends Uint8ClampedArray {
}
const v2 = new C1();
for (let i4 = 0; i4 < 10000; i4++) {
    C1.__proto__ = v2;
    v2 instanceof C1;
}
