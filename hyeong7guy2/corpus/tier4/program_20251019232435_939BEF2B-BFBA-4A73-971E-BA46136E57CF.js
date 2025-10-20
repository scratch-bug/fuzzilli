function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function f5() {
    return -11n;
}
F2.toString = f5;
const t7 = Intl.Collator;
t7().compare(F2, -1466985850);
