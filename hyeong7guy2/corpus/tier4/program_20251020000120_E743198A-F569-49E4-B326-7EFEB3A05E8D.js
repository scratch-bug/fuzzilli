const v4 = new ArrayBuffer(Object, { maxByteLength: 505 });
const v6 = new Int16Array(v4);
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
}
try { F7.apply(ArrayBuffer, v6); } catch (e) {}
