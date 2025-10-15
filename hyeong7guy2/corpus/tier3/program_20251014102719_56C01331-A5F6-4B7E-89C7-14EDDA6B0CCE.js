function f0() {
    return f0;
}
gc({ execution: "async" });
const v7 = new FinalizationRegistry(Object);
v7.register(f0);
