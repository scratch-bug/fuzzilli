function f0() {
}
function f1() {
}
const v2 = class {
}
const v3 = class extends f0 {
}
gc({ execution: "async" });
const v9 = new FinalizationRegistry(v3);
v9.register(v9, f1, v2);
