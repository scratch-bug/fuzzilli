function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
const v5 = {};
for (let i7 = 0; i7 < 20000; i7++) {
    const v15 = i7 % 2 ? v4 : v5;
    v15.f = v15;
    v15.toISOString = v4;
}
