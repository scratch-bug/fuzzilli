function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
const v6 = ("asyncIterator").normalize("NFKD");
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    try { a11.matchAll(F7); } catch (e) {}
    a12.f = a12;
}
F7.prototype = F7;
new F7("NFKD", "asyncIterator", "asyncIterator", v2);
new F7(v6, "asyncIterator", "NFKD", v3);
new F7(v6, v6, "NFKD", v3);
const v17 = [820.6639990574286];
v17.toString();
[v17];
gc();
