const v2 = new FinalizationRegistry(Object);
try { v2.unregister(); } catch (e) {}
