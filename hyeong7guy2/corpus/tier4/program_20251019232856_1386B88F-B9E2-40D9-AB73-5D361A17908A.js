const v1 = [-5.0,4.0];
const v2 = {};
v2.deleteProperty = Symbol;
const v4 = new Proxy(v1, v2);
v4.pop();
