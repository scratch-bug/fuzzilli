const v2 = new Int16Array(1990410499);
const v4 = class extends Uint32Array {
}
function f5() {
    for (const v6 in v2) {
    }
    return v4;
}
v4[Symbol.toPrimitive] = f5;
const v9 = new v4();
try { v9.subarray(v4); } catch (e) {}
