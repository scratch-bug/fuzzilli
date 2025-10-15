function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    class C4 {
        #n(a6, a7) {
        }
    }
    new C4();
}
const v9 = new F0(F0, F0);
const v10 = new F0(F0, v9);
new F0(v10, v9);
