function f1(a2) {
    const v7 = new SharedArrayBuffer(333, { maxByteLength: 333 });
    const v9 = new Float32Array(v7);
    v9.slice();
    return 333;
}
Object.defineProperty(BigInt64Array, "valueOf", { writable: true, enumerable: true, value: f1 });
function f11() {
    return f11;
}
f11 <= BigInt64Array;
