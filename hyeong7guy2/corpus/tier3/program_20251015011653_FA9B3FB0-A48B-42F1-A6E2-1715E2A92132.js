const v4 = new ArrayBuffer(4, { maxByteLength: 2147483648 });
const v6 = new Float32Array(v4);
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    const v11 = this.constructor;
    try { new v11(v6); } catch (e) {}
    const t6 = a9.constructor;
    new t6(a9);
}
new F7(F7);
