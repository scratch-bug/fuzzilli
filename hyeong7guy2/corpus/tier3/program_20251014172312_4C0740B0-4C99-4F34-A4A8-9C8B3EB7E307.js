class C1 extends Map {
}
const v2 = new C1();
for (let i4 = 0; i4 < 25000; i4++) {
    v2["delete"]();
}
