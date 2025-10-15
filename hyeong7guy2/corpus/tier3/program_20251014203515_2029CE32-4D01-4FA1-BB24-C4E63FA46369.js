const v1 = [];
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = F2.constructor;
    try { v7(a6, v1, BigInt64Array); } catch (e) {}
}
new F2();
