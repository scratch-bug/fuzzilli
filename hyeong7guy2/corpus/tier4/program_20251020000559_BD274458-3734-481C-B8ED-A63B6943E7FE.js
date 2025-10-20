const v0 = {};
const v1 = [-5.0,4.0];
const v2 = {};
v2.deleteProperty = v0;
const v4 = new Proxy(v1, v2);
try { v4.pop(); } catch (e) {}
