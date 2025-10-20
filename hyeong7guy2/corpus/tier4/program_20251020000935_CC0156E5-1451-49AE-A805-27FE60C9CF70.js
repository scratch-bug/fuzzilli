const v0 = [-5.0,4.0];
const v2 = {};
v2.deleteProperty = gc;
const v4 = new Proxy(v0, v2);
try { v4.pop(v2, gc, v2); } catch (e) {}
