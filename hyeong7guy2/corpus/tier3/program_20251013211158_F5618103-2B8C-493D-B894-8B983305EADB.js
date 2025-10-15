const v1 = class extends Map {
}
const v2 = new v1();
const v3 = new v1();
try { v3.forEach(v2); } catch (e) {}
new Uint32Array(4091);
