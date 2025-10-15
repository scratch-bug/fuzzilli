class C1 {
}
C1.toReversed = 0;
const v3 = `toReversed` in C1;
function F4() {
    if (!new.target) { throw 'must be called with new'; }
    this.numberingSystem = v3;
    const t7 = Intl.DateTimeFormat;
    t7(Intl, this);
}
new F4();
