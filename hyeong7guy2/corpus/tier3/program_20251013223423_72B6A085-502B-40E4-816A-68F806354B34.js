const v1 = new BigInt64Array();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    try { a4.with(); } catch (e) {}
}
new F2(v1);
