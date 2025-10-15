class C0 {
}
const v1 = {};
function f2(a3) {
    v1.p1 = C0;
    return a3;
}
for (let i5 = 0; i5 < 20000; ++i5) {
    f2(i5);
}
gc();
