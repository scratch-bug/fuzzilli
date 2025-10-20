const v3 = new ArrayBuffer(505, { maxByteLength: 505 });
const v5 = new Int16Array(v3);
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
}
try { F6.apply(ArrayBuffer, v5); } catch (e) {}
