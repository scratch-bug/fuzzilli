const v2 = new FinalizationRegistry(Object);
const v3 = { __proto__: v2 };
try { v3.unregister(); } catch (e) {}
