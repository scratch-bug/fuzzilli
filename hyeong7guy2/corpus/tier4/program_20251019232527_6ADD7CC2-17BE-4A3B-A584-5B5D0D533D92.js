class C0 {
}
function f1(a2, a3) {
    return Symbol.iterator;
}
C0.valueOf = f1;
const v7 = [{},C0];
const v12 = new ArrayBuffer(1507, { maxByteLength: 1507 });
const v14 = new Int32Array(v12);
try { v14.set(v7); } catch (e) {}
