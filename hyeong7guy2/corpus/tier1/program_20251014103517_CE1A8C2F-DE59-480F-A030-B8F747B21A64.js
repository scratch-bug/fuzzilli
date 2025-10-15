[-128,1599,-268435456,-2147483648,-12,-12,1432756977];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
F1.f = F1;
Array();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = this.constructor;
    try { new v10(); } catch (e) {}
}
new F6();
class C13 extends F6 {
}
new C13();
const v16 = {};
for (let v17 = 0; v17 < 25; v17++) {
    v17++;
}
