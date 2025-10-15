const v1 = new Date();
const v2 = class {
}
const v3 = new v2();
v3.length = v1;
try { Uint8Array.apply(v1, v3); } catch (e) {}
