const v1 = class extends Map {
}
const v2 = new v1();
const v4 = v2.entries().flatMap(v1);
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    v4.f = this;
}
new F5();
