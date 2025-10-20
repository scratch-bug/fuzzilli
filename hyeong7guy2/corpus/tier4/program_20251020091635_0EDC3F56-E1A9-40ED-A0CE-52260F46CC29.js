class C0 {
}
const v3 = Array();
v3[1] = C0;
const v4 = v3.push(Uint8ClampedArray);
const v8 = new SharedArrayBuffer(v4, { maxByteLength: 146 });
const v10 = new Int8Array(v8);
const t7 = v10.constructor;
new t7(v10);
