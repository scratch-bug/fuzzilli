const v5 = new ArrayBuffer(6, { maxByteLength: 65536 });
const v7 = new Int16Array(v5);
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a10;
}
const v13 = new F8(Float64Array);
const t7 = v13.b;
new t7(v7);
