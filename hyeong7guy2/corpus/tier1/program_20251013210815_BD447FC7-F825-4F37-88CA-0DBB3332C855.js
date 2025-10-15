function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a2;
}
new F0(F0);
new F0();
