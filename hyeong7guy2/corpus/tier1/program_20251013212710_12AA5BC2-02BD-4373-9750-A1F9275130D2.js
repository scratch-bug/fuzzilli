const v0 = {};
function f1(a2) {
    v0.p1 = a2;
    return a2;
}
for (let i4 = 0; i4 < 20000; ++i4) {
    f1(2.2);
}
f1();
