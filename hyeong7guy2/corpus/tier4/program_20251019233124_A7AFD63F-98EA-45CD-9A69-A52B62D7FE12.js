const v2 = { maxByteLength: 2147483648 };
const v4 = new SharedArrayBuffer(256, v2);
const v6 = new Float32Array(v4);
class C7 {
}
try { C7.apply(v2, v6); } catch (e) {}
