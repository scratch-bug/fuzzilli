const v1 = class extends Array {
}
try { new v1(...Array, v1); } catch (e) {}
const v3 = [];
v3[0] = 2.2;
for (let i6 = 0; i6 < 25000; i6++) {
    v3[512] = 8;
    v3?.[0] | 536870887;
}
