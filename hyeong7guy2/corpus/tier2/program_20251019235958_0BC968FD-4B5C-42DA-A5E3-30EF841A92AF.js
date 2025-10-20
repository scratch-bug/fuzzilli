const v0 = class {
}
const v1 = [30735,268435456,-576196098,-128];
const v2 = {};
function f3() {
    return v0;
}
function f4(a5) {
    return a5;
}
Object.defineProperty(v2, "has", { get: f3, set: f4 });
const v7 = new Proxy(v1, v2);
const v9 = Object.create(v7);
try { v9.reduceRight(Object); } catch (e) {}
