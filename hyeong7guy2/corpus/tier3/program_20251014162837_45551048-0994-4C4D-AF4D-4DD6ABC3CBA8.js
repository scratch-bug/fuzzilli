const v1 = class extends Int8Array {
}
class C2 extends v1 {
}
for (let i4 = 0; i4 < 10000; ++i4) {
    C2 & i4;
    i4 * i4;
}
