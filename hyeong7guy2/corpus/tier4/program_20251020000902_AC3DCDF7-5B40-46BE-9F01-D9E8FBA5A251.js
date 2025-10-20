function f1() {
    return 127;
}
const v4 = new Int8Array(9);
v4.toString = f1;
v4[6] = v4;
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    v4.toSorted(a10);
}
new F5();
