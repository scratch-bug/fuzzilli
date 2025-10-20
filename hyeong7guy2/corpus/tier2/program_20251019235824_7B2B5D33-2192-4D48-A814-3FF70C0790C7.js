function f1() {
    return f1;
}
function f2() {
    let v3 = 7;
    for (let v4 = 0; v4 < 100; v4++) {
        v3 *= 20000;
    }
    const v10 = new ArrayBuffer(16, { maxByteLength: 16 });
    const v12 = new Uint8Array(v10);
    v12.includes(v3);
}
function f14(a15) {
    return a15;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f14 });
new Uint16Array(f1);
