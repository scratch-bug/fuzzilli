class C2 extends Array {
    static set c(a4) {
    }
}
function f5(a6) {
    C2.c |= a6;
    return a6;
}
function f7(a8, a9) {
    a9.valueOf = f5;
    return a8 / a8;
}
f7(Symbol, Symbol);
for (let i14 = 0; i14 < 100; i14++) {
    try { f7(); } catch (e) {}
}
