const v1 = [-5.0,4.0];
const v2 = {};
Object.defineProperty(v2, "deleteProperty", { enumerable: true, value: Float64Array });
const v4 = new Proxy(v1, v2);
try { v4.pop(); } catch (e) {}
