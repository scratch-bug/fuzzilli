function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    this.length = this;
}
const v4 = new F0(F0, F0);
v4.length = F0;
for (let i6 = 0; i6 < 20000; i6++) {
}
v4.length = 1;
