function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new F3(F3, F0, F3);
for (let i10 = 0; i10 < 100000; i10++) {
    const v17 = { [v8]: 1 };
}
function F19(a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
}
try { new F19(F19, 1.3827736334679176e+308, F19); } catch (e) {}
new F19(C2);
