const v2 = class extends BigInt64Array {
}
for (const v3 in BigInt64Array) {
    v3.link();
}
const v5 = new v2();
const v6 = new v2();
try { v6.sort(v5); } catch (e) {}
