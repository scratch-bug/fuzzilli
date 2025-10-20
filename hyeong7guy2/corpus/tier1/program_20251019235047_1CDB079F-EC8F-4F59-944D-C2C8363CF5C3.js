function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F1(3, 3);
v5.length = 3;
for (let i7 = 0; i7 < 20000; i7++) {
}
v5.length = v5;
