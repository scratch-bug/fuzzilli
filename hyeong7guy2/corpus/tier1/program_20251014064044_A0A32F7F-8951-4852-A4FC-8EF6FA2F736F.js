const v4 = new SharedArrayBuffer(257, { maxByteLength: 2147483649 });
const v6 = new Float64Array(v4);
Object.defineProperty(v6, 4, { configurable: true, enumerable: true, value: Int16Array });
