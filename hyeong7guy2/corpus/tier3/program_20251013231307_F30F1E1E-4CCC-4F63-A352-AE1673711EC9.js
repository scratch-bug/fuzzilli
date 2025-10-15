class C0 {
}
const v1 = class extends C0 {
}
const v3 = new Int32Array(v1, v1);
try { v3.reduceRight(v1); } catch (e) {}
