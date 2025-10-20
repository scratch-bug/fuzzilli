function f0() {
    return f0;
}
const v1 = class extends f0 {
}
gc({ execution: "async" });
function f7(a8) {
    return a8;
}
const v9 = new FinalizationRegistry(v1);
v9.constructor = f7;
