function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = {};
for (let i6 = 0; i6 < 20000; i6++) {
    const v14 = i6 % 2 ? F0 : v4;
    v14.toISOString = {};
}
