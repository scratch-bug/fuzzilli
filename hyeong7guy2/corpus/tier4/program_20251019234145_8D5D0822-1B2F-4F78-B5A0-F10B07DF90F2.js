function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a2;
}
const v3 = new F0(F0);
const v4 = v3.e;
v4.prototype = v4;
const v5 = new v4(v3, v3);
const v7 = new ArrayBuffer(v4, ArrayBuffer);
try { v7.slice(v7, v5); } catch (e) {}
