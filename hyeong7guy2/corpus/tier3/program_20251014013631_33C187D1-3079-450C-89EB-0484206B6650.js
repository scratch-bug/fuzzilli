function f0() {
    return Uint8Array.of(244, 75).toBase64();
}
const v7 = new Float32Array(f0, Float32Array, Float32Array);
v7[Symbol.toPrimitive] = f0;
v7[1] = v7;
