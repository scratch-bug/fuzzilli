const v5 = new ArrayBuffer(64, { maxByteLength: 65536 });
const v7 = new Uint32Array(v5);
function f8(a9) {
    return 97;
}
v7[Symbol.toPrimitive] = f8;
v7[2] = v7;
