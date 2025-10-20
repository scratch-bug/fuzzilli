let v1;
try { v1 = new Symbol(); } catch (e) {}
const v3 = [-1000.0,-Infinity,1000000000.0,-1000.0];
Object[0] = v1;
Reflect.apply(v3.includes, Object, Float32Array);
