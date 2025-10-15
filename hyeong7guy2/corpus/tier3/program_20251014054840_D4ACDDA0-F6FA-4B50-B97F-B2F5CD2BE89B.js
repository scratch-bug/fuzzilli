function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a2;
}
class C3 extends F0 {
    get get() {
    }
}
new C3();
