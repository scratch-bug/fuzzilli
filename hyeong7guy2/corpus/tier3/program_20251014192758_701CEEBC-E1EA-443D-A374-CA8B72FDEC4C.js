const v2 = class extends Float32Array {
}
const v3 = new v2();
const v4 = v3.includes;
try { v4.call(-6); } catch (e) {}
