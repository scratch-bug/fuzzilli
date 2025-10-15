function f0() {
    return f0;
}
class C1 extends f0 {
}
class C2 {
}
C2.e = C1;
for (let i4 = 0;
    i4 >>> i4, i4 < 20000;
    (() => {
        i4++;
        C2.e |= i4;
    })()) {
}
