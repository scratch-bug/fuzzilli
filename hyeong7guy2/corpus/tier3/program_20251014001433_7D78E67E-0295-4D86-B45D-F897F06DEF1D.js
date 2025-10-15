function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F0();
for (let i7 = 0; i7 < 100000; i7++) {
    ({ [v5]: 1, p1: 1.1, p2: 1 }).p1;
}
