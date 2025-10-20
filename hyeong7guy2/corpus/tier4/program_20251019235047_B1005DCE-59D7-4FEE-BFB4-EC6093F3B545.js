const v2 = class extends Float64Array {
}
const v3 = new v2();
const v4 = class {
}
v4.__lookupGetter__.apply(64, v3);
