function f2() {
    Date.prototype.setUTCSeconds.call(134);
    return Date;
}
BigInt64Array.toString = f2;
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    const t7 = this.constructor;
    t7(a11, BigInt64Array);
}
F7.prototype = F7;
try { new F7(BigInt64Array, 134, BigInt64Array); } catch (e) {}
