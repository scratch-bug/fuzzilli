const v0 = [-5.0,4.0];
const v4 = new Proxy(v0, { getOwnPropertyDescriptor: gc });
try { v4.pop(Proxy); } catch (e) {}
