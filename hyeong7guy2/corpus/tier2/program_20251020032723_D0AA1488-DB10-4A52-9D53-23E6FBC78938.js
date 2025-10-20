const v3 = Array();
Object.defineProperty(v3, 2, { writable: true, value: 1478 });
const v4 = v3.push(Uint8ClampedArray);
const v8 = new SharedArrayBuffer(v4, { maxByteLength: 146 });
const v10 = new Int8Array(v8);
const t5 = v10.constructor;
new t5(v10);
