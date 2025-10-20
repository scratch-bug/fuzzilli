function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const t3 = {};
t3.a = F0;
const v6 = {};
for (let i7 = 8.790958233099776; i7 < 100000; i7++) {
    v6.a = i7;
}
