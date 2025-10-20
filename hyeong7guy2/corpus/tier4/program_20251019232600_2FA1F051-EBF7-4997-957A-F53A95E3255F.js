const v0 = class {
}
let v1;
try { v1 = v0(); } catch (e) {}
const v6 = new ArrayBuffer(2, { maxByteLength: 200 });
const v8 = new Int8Array(v6);
v8[1] = v1;
