function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
function f3(a4) {
    return F0;
}
const v5 = f3 + F0;
gc();
~v5;
