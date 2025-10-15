function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F1(F1, F1);
v5.length = 2147483647n;
v5.length = F1;
for (let i7 = 0; i7 < 20000; i7++) {
}
v5.length = 1;
