const v0 = class {
}
function f1() {
    let v2 = 1;
    v2++;
    return v2;
}
v0[Symbol.toPrimitive] = f1;
const v11 = new ArrayBuffer(2359, { maxByteLength: 1525239387 });
const v13 = new Uint32Array(v11, Uint32Array, v0);
v13.fill(4096);
