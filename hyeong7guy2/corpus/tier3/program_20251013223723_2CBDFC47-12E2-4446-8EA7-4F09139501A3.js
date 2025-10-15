function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
class C3 extends F0 {
}
const v4 = new C3();
Object.create({});
for (let i11 = 0; i11 < 20000;) {
    ++i11;
}
v4 instanceof Object;
new BigUint64Array(1073741825);
Symbol();
