const v2 = new Int8Array(1000);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    try { a6(F3, ...v2, ...v2); } catch (e) {}
}
new F3(1000, 1000);
