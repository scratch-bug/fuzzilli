const v1 = {};
const v2 = class {
}
v2[Symbol] = Symbol;
new v2();
v2.toString = Symbol;
Float32Array[0] = v2;
try { new Float32Array(Float32Array, Float32Array, Symbol); } catch (e) {}
new Float32Array(2179);
Date();
for (let i12 = 0; i12; i12++, Math <= Math) {
}
