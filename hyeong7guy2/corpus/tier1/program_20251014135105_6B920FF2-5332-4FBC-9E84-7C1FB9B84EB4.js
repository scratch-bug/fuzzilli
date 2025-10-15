function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F1(F1, F1, F1, 512);
for (let i9 = 512; i9 < 20000; ++i9) {
    v7.minimumFractionDigits |= 1.1356230574660949e+308;
}
