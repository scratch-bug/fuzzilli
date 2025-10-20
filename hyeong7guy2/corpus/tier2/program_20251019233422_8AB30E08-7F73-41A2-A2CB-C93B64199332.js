const v0 = [-28740];
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = new BigInt64Array(this, a4, a3);
    function f10(a11, a12, a13, a14) {
        a14++;
        Object.defineProperty(v9, a14, { configurable: true, value: f10 });
        return v0;
    }
    try { f10(v0, 536870887n, v9, v0); } catch (e) {}
}
new F1();
