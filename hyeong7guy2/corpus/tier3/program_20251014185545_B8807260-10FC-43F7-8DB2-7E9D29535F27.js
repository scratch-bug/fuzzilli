const v2 = class extends Array {
}
const v3 = new v2();
v3.unshift(-4294967297n);
const v5 = new v2();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    a9[0];
}
new F6(v2, v3);
new F6(v2, v5);
