gc({ execution: "async" });
const v6 = new FinalizationRegistry(Object);
v6.register(v6);
