const v1 = [30735,268435456,-576196098,-128];
const v4 = new Proxy(v1, {});
try { v4.some(Uint8Array); } catch (e) {}
