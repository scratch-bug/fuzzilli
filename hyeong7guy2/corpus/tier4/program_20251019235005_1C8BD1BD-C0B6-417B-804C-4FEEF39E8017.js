function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v4 = gc();
gc();
const v6 = /a{1,2}?/dyvi;
const v7 = v6.exec(gc);
class C8 {
}
C8.toString(v7, C8, v6, v7, v4).search(v2);
