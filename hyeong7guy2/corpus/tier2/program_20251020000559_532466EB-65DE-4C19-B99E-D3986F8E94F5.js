const v2 = Array(Uint8ClampedArray);
function f3(a4) {
}
Object.defineProperty(v2, 0, { configurable: true, set: f3 });
const v5 = v2.push(Uint8ClampedArray);
const v9 = new SharedArrayBuffer(v5, { maxByteLength: 146 });
const v11 = new Int8Array(v9);
const t7 = v11.constructor;
new t7(v11);
