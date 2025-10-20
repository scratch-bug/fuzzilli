const v0 = class {
}
function f1() {
    return 1;
}
v0[Symbol.toPrimitive] = f1;
const v10 = new ArrayBuffer(2359, { maxByteLength: 1525239387 });
const v12 = new Uint32Array(v10, Uint32Array, v0);
v12.fill(4096);
