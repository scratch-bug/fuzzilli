function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function f5() {
    return -11n;
}
F2.toString = f5;
const v7 = Intl.Collator;
const v9 = {};
v9.numeric = F2;
v7("trv", v9).compare(F2, -1466985850);
