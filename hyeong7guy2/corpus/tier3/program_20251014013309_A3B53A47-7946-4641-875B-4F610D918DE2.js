const v1 = class extends Array {
}
const v2 = new v1(v1);
v2[1] = v2;
v2.includes(v2);
