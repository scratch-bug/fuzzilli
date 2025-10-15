class C2 {
    static get e() {
    }
}
if (C2) {
}
gc();
const v8 = new C2();
Object.defineProperty(v8, "constructor", { value: gc });
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(this, "b", { value: this });
    const t12 = a11.constructor;
    new t12();
}
new F9(v8, F9, C2);
for (let v17 = 0; v17 < 5; v17++) {
}
