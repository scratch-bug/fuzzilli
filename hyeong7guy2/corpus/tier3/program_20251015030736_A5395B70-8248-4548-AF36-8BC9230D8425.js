let v0 = 127;
function f2(a3, a4) {
    (v0++).fontsize();
    return a3;
}
BigInt64Array.toString = f2;
const v7 = [f2,f2,f2];
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    const v13 = F8.constructor;
    try { v13(a12, v7, BigInt64Array); } catch (e) {}
}
new F8();
