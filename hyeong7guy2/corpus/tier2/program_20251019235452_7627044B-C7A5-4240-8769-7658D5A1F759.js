const v2 = new Uint8Array(Uint8Array, 97);
function f3(a4) {
    const v9 = new ArrayBuffer(512, { maxByteLength: 1073741824 });
    const v11 = new Uint32Array(v9);
    v11.fill(97);
    return 97;
}
Object.defineProperty(v2, "valueOf", { writable: true, value: f3 });
v2[31] = v2;
