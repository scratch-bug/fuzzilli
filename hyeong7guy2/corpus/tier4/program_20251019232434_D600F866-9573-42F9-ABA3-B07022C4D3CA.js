const v6 = new SharedArrayBuffer(5, { maxByteLength: 268435441 });
const v7 = new Uint16Array(v6);
Reflect.construct(Uint8Array, [v7]);
