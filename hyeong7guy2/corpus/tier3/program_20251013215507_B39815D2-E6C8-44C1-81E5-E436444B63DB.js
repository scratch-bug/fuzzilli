class C1 extends Array {
    static set c(a3) {
    }
}
function f4(a5, a6) {
    a5[0];
    return a5;
}
for (let i10 = 0; i10 < 25000; i10++) {
    try { f4(100); } catch (e) {}
}
