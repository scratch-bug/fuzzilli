const v2 = new FinalizationRegistry(WeakSet);
try { v2.register(WeakSet, WeakSet); } catch (e) {}
