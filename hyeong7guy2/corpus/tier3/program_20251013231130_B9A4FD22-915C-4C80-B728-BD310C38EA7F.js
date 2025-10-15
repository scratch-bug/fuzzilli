function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    a5[0] = a5;
}
new F2("setFromHex", "number");
try {
    new F2();
} catch(e10) {
}
