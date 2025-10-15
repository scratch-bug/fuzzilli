const v1 = class extends Float32Array {
}
const v2 = new v1();
try { v2.sort(v2); } catch (e) {}
const v4 = new v1();
v4.reverse();
