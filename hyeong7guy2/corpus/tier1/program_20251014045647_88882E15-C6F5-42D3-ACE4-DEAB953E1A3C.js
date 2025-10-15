function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a2;
}
const v5 = new F0(F0, F0, F0);
const v6 = new F0();
for (const v8 in v6) {
}
v5.__proto__ = Symbol;
