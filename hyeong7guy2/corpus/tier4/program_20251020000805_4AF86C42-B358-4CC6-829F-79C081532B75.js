const v1 = /hxyz{1,}/dg;
Object.defineProperty(v1, "toISOString", { writable: true, configurable: true, enumerable: true, value: 208 });
const v4 = Date.prototype.toJSON;
try { v4.call(v1); } catch (e) {}
