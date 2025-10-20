const v2 = {};
v2.get = Symbol;
const v4 = new Proxy(Float64Array, v2);
try { new v4(); } catch (e) {}
