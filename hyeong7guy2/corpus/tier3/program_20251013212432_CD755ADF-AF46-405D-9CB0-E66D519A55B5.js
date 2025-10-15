function f0(a1) {
    a1.push(1);
}
class C5 extends Array {
}
class C6 extends Array {
}
for (let i8 = 0; i8 < 25000; ++i8) {
    const v14 = new C5();
    f0(v14);
}
new C6();
