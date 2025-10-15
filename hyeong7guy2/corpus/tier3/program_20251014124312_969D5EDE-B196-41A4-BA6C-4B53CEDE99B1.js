let v0 = -4;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    v0++;
    Math.atan2(v0++, v0);
}
const v9 = new F1();
new F1(v9, F1);
