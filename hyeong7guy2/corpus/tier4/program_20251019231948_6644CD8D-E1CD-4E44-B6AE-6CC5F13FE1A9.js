let v1 = 1000;
v1--;
const v3 = new SharedArrayBuffer(v1);
const v5 = new Uint8Array(v3);
v5.set(v5);
