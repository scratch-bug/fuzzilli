const v1 = new Int8Array();
const v4 = new Proxy(v1, {});
try { v4.fill(); } catch (e) {}
