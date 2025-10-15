const v2 = Reflect.getPrototypeOf(Uint32Array);
try { v2.from(v2); } catch (e) {}
