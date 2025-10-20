const v3 = { execution: "async", type: "minor" };
gc(v3);
function f5() {
    return v3;
}
const v6 = class extends f5 {
}
const v8 = new FinalizationRegistry(v6);
v8.register(v8);
