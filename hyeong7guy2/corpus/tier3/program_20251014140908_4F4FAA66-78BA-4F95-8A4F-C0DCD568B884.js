const v5 = new SharedArrayBuffer(5, { maxByteLength: 268435441 });
const v7 = new Int16Array(v5);
Reflect.construct(Uint8Array, [v7]);
