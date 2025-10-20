const v1 = { get: Date };
const v3 = new Proxy(Date, v1);
try { new v3(Date, v1); } catch (e) {}
