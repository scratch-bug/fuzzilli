const v2 = {};
v2.defineProperty = Array;
const v4 = new Proxy(Uint8Array, v2);
Object.defineProperty(v4, 128, { writable: true, configurable: true, enumerable: true, value: v4 });
