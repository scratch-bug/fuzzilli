const v1 = {};
const v3 = Proxy.revocable(WeakSet, v1);
v3.revoke(v3, v3, v1);
const v5 = v3.proxy;
try { v5(); } catch (e) {}
