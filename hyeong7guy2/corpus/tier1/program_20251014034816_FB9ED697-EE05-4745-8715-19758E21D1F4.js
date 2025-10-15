const v5 = { execution: "async" };
v5.flavor = 0.0;
v5.execution = v5;
gc(v5);
const v7 = new FinalizationRegistry(Object);
v7.register(v7);
