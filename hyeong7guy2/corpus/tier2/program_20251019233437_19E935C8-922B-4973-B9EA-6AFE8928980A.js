function f1() {
    return f1;
}
function f2() {
    let v3 = 7;
    for (let v4 = 0; v4 < 5; v4++) {
        v3 *= v4;
    }
    const v9 = new ArrayBuffer(16, { maxByteLength: 16 });
    const v11 = new Uint8Array(v9);
    v11.includes(v3);
}
function f13(a14) {
    return Symbol;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f13 });
new Uint16Array(f1);
