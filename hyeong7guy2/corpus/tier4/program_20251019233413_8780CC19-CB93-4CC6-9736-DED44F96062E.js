function f1() {
}
const v2 = class extends f1 {
}
const v4 = new FinalizationRegistry(v2);
v4.constructor = gc;
const t6 = v4.constructor;
t6(v2);
