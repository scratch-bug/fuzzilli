function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v10 = new ArrayBuffer(79, { maxByteLength: 79 });
const v12 = new Int32Array(v10, Int32Array, F0);
function f13() {
    return f13;
}
f13.apply(F2, v12);
