const v1 = {};
gc(v1);
function f3() {
    return v1;
}
const v4 = class extends f3 {
}
try { FinalizationRegistry(v4); } catch (e) {}
const v7 = new FinalizationRegistry(v4);
v7.register(v7);
