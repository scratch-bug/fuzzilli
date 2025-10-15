const v2 = [30735,268435456,-576196098,-128];
const v3 = {};
v3.has = 3;
const v5 = new Proxy(v2, v3);
try { v5.some(Uint8Array); } catch (e) {}
