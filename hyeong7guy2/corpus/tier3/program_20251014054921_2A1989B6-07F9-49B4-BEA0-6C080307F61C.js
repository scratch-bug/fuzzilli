const v1 = class extends BigInt64Array {
}
const v2 = class extends v1 {
}
const v3 = new v2();
v3.filter(v2);
