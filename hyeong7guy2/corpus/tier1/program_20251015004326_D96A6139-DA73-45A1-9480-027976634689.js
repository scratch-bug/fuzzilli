function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = {};
for (let v5 = 0; v5 < 100; v5++) {
    v5 ? {} : v3;
    v5++;
}
